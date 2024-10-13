import crypto from "crypto"
import fs from 'fs'
import path from 'path'

export const calculateHash = async (filePath) => {
    const hash = crypto.createHash('sha256')
    const stream = fs.createReadStream(filePath)
    stream.on('data', chunk => hash.update(chunk))
    stream.on('end', () => console.log(hash.digest('hex')))
};