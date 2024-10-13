import path from 'path'


export const moveUp = async (currentDir, rootDir) => {
    const parentDir = path.resolve(currentDir, '..');
    if (parentDir.startsWith(rootDir) && parentDir !== rootDir) {
        return parentDir;
    } else if (parentDir === rootDir) {
        return rootDir;
    } else {
        console.log("You can't navigate above root directory");
        return currentDir;
    }
};