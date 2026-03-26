import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const ASSETS_DIR = process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/assets');

if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Directory not found: ${ASSETS_DIR}`);
    console.log('Usage: node list_images.mjs [optional/path/to/assets]');
    process.exit(1);
}



function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            results.push({
                path: file,
                size: stat.size,
                ext: path.extname(file).toLowerCase()
            });
        }
    });
    return results;
}

const allFiles = getFiles(ASSETS_DIR);
const toConvert = allFiles.filter(f => ['.png', '.jpg', '.jpeg'].includes(f.ext));

toConvert.sort((a, b) => b.size - a.size);

console.log('FILEPATH|SIZE_BYTES');
toConvert.forEach(f => {
    console.log(`${f.path}|${f.size}`);
});
