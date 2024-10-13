import path from 'path'
import fs from 'fs'


export const readFile = async (dir, fileName) => {
    const fileForRead = path.join(dir, fileName)

    if (!fs.existsSync(fileForRead)) {
        throw new Error('file does not exist')
    }

    const stream = fs.createReadStream(filePath, {encoding: 'utf-8'})
    stream.on('data', chunk => {
        process.stdout.write(chunk)
    })
    stream.on('end', () => {
        console.log('')
    })
}