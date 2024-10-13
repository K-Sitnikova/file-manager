import fs from 'fs'
import path from 'path'

export const copyFile = (currentDir, destinationDir) => {
    const fileName = path.basename(currentDir)
    const destinationPath = path.join(destinationDir, fileName);
    const readStream = fs.createReadStream(currentDir, {encoding: 'utf-8'});
    const writeStream = fs.createWriteStream(destinationPath, {encoding: 'utf-8'});

    readStream.on('error', (err) => {
        console.error(`Error reading file: ${err.message}`);
    });

    writeStream.on('error', (err) => {
        console.error(`Error writing file: ${err.message}`);
    });

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File was copied to ${destinationPath}`);
    });
}