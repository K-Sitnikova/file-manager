import zlib from 'zlib'
import fs from 'fs'

export const compressFile = (current, dest) => {
    const currentFilestream = fs.createReadStream(current);
    const destFileStream = fs.createWriteStream(dest);

    const compress = zlib.createBrotliCompress()

    currentFilestream.pipe(compress).pipe(destFileStream).on('finish', () => {
        console.log('file compressed')
    })
};