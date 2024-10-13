import os from 'os'
import path from 'path'

const homeDir = os.homedir();
let currentDir = homeDir;
const rootDir = path.parse(currentDir).root


export const moveUp = () => {
    const parentDir = path.resolve(currentDir, '..')
    console.log(os.getHomeDir())
    if(parentDir.startsWith(rootDir) && parentDir !== rootDir) {
        currentDir = parentDir
    } else if(parentDir === rootDir) {
        currentDir = rootDir
    } else {
        console.log("you can't navigate above root directory")
    }
}