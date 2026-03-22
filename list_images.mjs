import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'c:/Users/vigne/Downloads/motion-cta-dream-main/motion-cta-dream-main/src/assets';

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
