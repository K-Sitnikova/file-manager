import os from 'os'
import path from 'path'
import fs from 'fs'

const homeDir = os.homedir();
let currentDir = homeDir;
const rootDir = path.parse(currentDir).root


export const changeDirectory = (target) => {
    let newDir;
    if(path.isAbsolute(target)) {
        newDir = target
    } else {
        newDir = path.resolve(currentDir, target)
    } 

    if (newDir.startsWith(rootDir)) {
        fs.stat(newDir, (err, stats) => {
          if (err) {
            console.log('error on change dir');
          } else if (stats.isDirectory()) {
            currentDir = newDir;
          } else {
            console.log('Target is not a directory');
          }
        });
      } else {
        console.log("You can't navigate above root directory");
      }
}