import fs, { existsSync } from 'fs'
import path from 'path'


export const renameFile = async (dir, fileName, newFileName) => {
    const fileForRename = path.join(dir, fileName)
    const fileAfterRename = path.join(dir, newFileName)

    if (existsSync(fileAfterRename) || !existsSync(fileForRename)) {
        throw new Error('FS operation failed')
    }

    fs.rename(fileForRename, fileAfterRename, (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}