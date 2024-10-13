import { copyFile } from "./copyFile.js";
import fs from 'fs'
import path from "path";

export const moveFile = (currentDir, destinationDir) => {
    return new Promise((resolve, reject) => {
    
        const fileName = path.basename(currentDir);
        const destinationPath = path.join(destinationDir, fileName);

        const readStream = fs.createReadStream(currentDir);

        const writeStream = fs.createWriteStream(destinationPath);
       
        writeStream.on('finish', () => {
            fs.unlink(currentDir, (err) => {
                if (err) {
                    reject(`Error deleting original file: ${err.message}`);
                } else {
                    resolve(`File was moved to ${destinationPath}`);
                }
            });
        });

        readStream.pipe(writeStream);
    });
}