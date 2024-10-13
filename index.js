#!/usr/bin/env node

import readline from 'readline'
import path from 'path'
import { fileURLToPath } from "url";
import { changeDirectory } from './modules/changeDirectory.js';
import { moveUp } from './modules/moveUp.js';
import { read } from './modules/read.js';
import os from 'os'

const args = process.argv.slice(2);
let username = 'User';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const homeDir = os.homedir();
let currentDir = homeDir;

args.forEach(arg => {
    if (arg.startsWith('--username=')) {
        username = arg.split('=')[1];
    }
});


const printCurrentDir = () => console.log(`You are currently in ${currentDir}`);

console.log(`Welcome to the File Manager, ${username}!`);
printCurrentDir()

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
    } else if (trimmedInput === 'up') {
        moveUp()
    } else if(trimmedInput.startsWith('cd '))  {
        const targetDir = trimmedInput.slice(3).trim()
        changeDirectory(targetDir)
    } else if(trimmedInput === 'ls') {
        read(currentDir)
    } else {
        console.log('Invalid input');
        printCurrentDir();
        rl.prompt();
    }
}).on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});

