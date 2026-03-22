import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PROJECT_ROOT = 'c:/Users/vigne/Downloads/motion-cta-dream-main/motion-cta-dream-main';
const ASSETS_DIR = path.join(PROJECT_ROOT, 'src/assets');
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

async function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(await getFiles(fullPath));
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                results.push({
                    path: fullPath,
                    size: stat.size,
                    ext: ext,
                    name: file
                });
            }
        }
    }
    return results;
}

async function optimize() {
    console.log('--- SCANNING ASSETS ---');
    const images = await getFiles(ASSETS_DIR);
    console.log(`Found ${images.length} images to optimize.`);

    const mapping = {};

    for (const img of images) {
        const outPath = img.path.replace(new RegExp(`${img.ext}$`, 'i'), '.webp');
        if (img.path === outPath) continue; // safety

        try {
            console.log(`Converting: ${img.name} (${(img.size/1024/1024).toFixed(2)} MB)`);
            
            // Start conversion
            const info = await sharp(img.path)
                .webp({ quality: 80, effort: 6 })
                .toFile(outPath);
            
            console.log(`  -> Success! New size: ${(info.size/1024/1024).toFixed(2)} MB (${(100 - (info.size/img.size*100)).toFixed(1)}% reduction)`);
            
            // Delete original
            fs.unlinkSync(img.path);
            
            // Store mapping for code replacement
            mapping[img.name] = path.basename(outPath);
            
        } catch (err) {
            console.error(`  !! Failed to convert ${img.name}:`, err.message);
        }
    }

    console.log('\n--- UPDATING CODE REFERENCES ---');
    const srcFiles = findFilesRecursive(SRC_DIR, ['.tsx', '.ts', '.js', '.jsx', '.css']);
    
    for (const file of srcFiles) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        for (const [oldName, newName] of Object.entries(mapping)) {
            // Regex to match the old filename, ensuring it's not a substring of something larger
            // We use \b at start? No, since assets might have leading path "@/"
            // Better to look for the exact string within quotes or just global replace of the string literal
            // Given asset names are unique enough with extensions.
            if (content.includes(oldName)) {
                // Escape special characters for regex
                const escapedOld = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(escapedOld, 'g');
                content = content.replace(regex, newName);
                changed = true;
                console.log(`  Updated ${oldName} -> ${newName} in ${path.basename(file)}`);
            }
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
        }
    }
    
    console.log('\n--- DONE ---');
}

function findFilesRecursive(dir, exts) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findFilesRecursive(fullPath, exts));
        } else {
            if (exts.includes(path.extname(fullPath).toLowerCase())) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

optimize().catch(err => {
    console.error('CRITICAL ERROR:', err);
});
