import fs from 'fs'

export const read = async (curr) => {
    fs.readdir(curr, {withFileTypes: true}, (err, files) => {
        if(err) {
            console.log("Error reading directory")
            return
        }

        const dir = []
        const filesInDir = []

        files.forEach((file) => {
            if(file.isDirectory()) {
                dir.push(file.name)
            } else {
                filesInDir.push(file.name)
            }
        })

        dir.sort()
        filesInDir.sort()

        console.log('Directories: ')
        dir.forEach((item) => console.log(` DIR ${item}`))
        console.log('Files: ')
        filesInDir.forEach((item) => console.log(` FILES ${item}`))
    })
};
