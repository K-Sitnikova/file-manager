import zlib from 'zlib'
import fs from 'fs'
import path from 'path';

export const compressFile = async (current, dest) => {
    const fileName = path.basename(current).replace(/\.[^.]*$/, '.gz');
    const compressed = path.join(dest, fileName);
    const inputFile = fs.createReadStream(current, {encoding: 'utf-8'})
    const outputFile = fs.createWriteStream(compressed)
    inputFile.pipe(zlib.createGzip()).pipe(outputFile)

};