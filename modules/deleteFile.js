import fs from 'fs'


export const deleteFile = (filePath) => {
    if(!fs.existsSync(filePath)) {
        throw new Error('FS operation failed')
    }

    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}