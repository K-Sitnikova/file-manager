import zlib from 'zlib'
import fs from 'fs'

export const decompressFile = (current, dest) => {
    const currentFilestream = fs.createReadStream(current);
    const destFileStream = fs.createWriteStream(dest);

    const compress = zlib.createBrotliDecompress()

    currentFilestream.pipe(compress).pipe(destFileStream).on('finish', () => {
        console.log('file decompressed')
    })

};