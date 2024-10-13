import readline from 'readline'
import os from 'os'
import path from 'path'

const args = process.argv.slice(2);
let username = 'User';

args.forEach(arg => {
  if (arg.startsWith('--username=')) {
    username = arg.split('=')[1];
  }
});

const homeDir = os.homedir();
let currentDir = homeDir;

function printCurrentDir() {
  console.log(`You are currently in ${currentDir}`);
}

console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();

rl.on('line', (input) => {
const trimmedInput = input.trim();

    if (trimmedInput === '.exit') {
        rl.close();
    } else {
        console.log('Invalid input');
        printCurrentDir();
        rl.prompt();
    }
}).on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});

