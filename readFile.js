import path from 'path'
import fs from 'fs'


export const readFile = async (dir, fileName) => {
    const fileForRead = path.join(dir, fileName)

    if (!fs.existsSync(fileForRead)) {
        throw new Error('file does not exist')
    }

    fs.readFile(fileForRead, {encoding: 'utf-8'}, (error, data) => {
        if (error) {
            console.log(error)
            return
        }
        console.log(data)
    })
}