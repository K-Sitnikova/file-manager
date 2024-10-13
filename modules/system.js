import os from 'os'

export const getInfo = (preffix) => {
    switch(preffix) {
        case "--EOL":
            osInfo()
            break;
        case "--cpus":
            cpuInfo()
            break;
        case "--homedir":
            homeDir()
            break;
        case "--username":
            currentUser()
            break;
        case "--architecture":
            architecture()
            break;
    }
}


const osInfo = () => {
    const type = os.type()
    const platform = os.platform()
    const release = os.release()
    const eol = JSON.stringify(os.EOL)

    console.log(`Тип ОС: ${type}`);
    console.log(`Платформа: ${platform}`);
    console.log(`Версия: ${release}`);
    
    console.log(`EOL: ${eol}`)
}

const cpuInfo = () => {
    const cpuCores = os.cpus();
    const numOfCpuCores = cpuCores.length
    console.log(`CPU length is: ${numOfCpuCores}`)
    console.log('CPU Info:', cpuCores)
}

const homeDir = () => {
    const homeDir = os.homedir();
    console.log(`Homedir is: ${homeDir}`)
}

const currentUser = () => {
    const user = os.userInfo()
    console.log(`Current user is: ${user.username}`)
}

const architecture = () => {
    console.log(`Architecture is: ${process.arch}`)
}