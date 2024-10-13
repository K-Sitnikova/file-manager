import os from 'os'
import path from 'path'
import fs from 'fs/promises'

const homeDir = os.homedir();
let currentDir = homeDir;
const rootDir = path.parse(currentDir).root;


export const changeDirectory = async (target) => {
    let newDir;
    if (path.isAbsolute(target)) {
        newDir = target;
    } else {
        newDir = path.resolve(currentDir, target);
    }

    if (newDir.startsWith(rootDir)) {
        try {
            const stats = await fs.stat(newDir);
            if (stats.isDirectory()) {
                currentDir = newDir;
            } else {
                console.log('Target is not a directory');
            }
        } catch (err) {
            console.log('Error on change dir');
        }
    } else {
        console.log("You can't navigate above root directory");
    }
    return newDir
};