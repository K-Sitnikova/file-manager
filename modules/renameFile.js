import fs from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'


export const renameFile = async (renamed, newFileName) => {
    const directory = path.dirname(renamed)
    const fileAfterRename = path.join(directory, newFileName)
    
    if (existsSync(fileAfterRename) || !existsSync(renamed)) {
        throw new Error('FS operation failed')
    }

    try {
        await fs.rename(renamed, fileAfterRename)
        console.log(`File created at directory ${fileAfterRename}`)
    }catch(err) {
        throw new Error('error on renaming file')
    }
}