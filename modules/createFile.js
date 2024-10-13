import fs from 'fs'
import path from 'path'


export const createFile = async (dir, filename) => {
    const fileForRead = path.join(dir, filename)
    const stream = fs.createWriteStream(fileForRead, {encoding: 'utf-8'})
    process.stdin.on('data', (chunk) => {
        stream.write(chunk)
    })
    process.stdin.on('end', () => {
        stream.end()
    })
}