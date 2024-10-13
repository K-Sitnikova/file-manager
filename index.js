#!/usr/bin/env node

import readline from 'readline'
import path from 'path'
import { fileURLToPath } from "url";
import { changeDirectory } from './modules/changeDirectory.js';
import { moveUp } from './modules/moveUp.js';
import { read } from './modules/read.js';
import os from 'os'
import { readFile } from './readFile.js';
import { createFile } from './modules/createFile.js';
import { renameFile } from './modules/renameFile.js';
import { copyFile } from './modules/copyFile.js';

const args = process.argv.slice(2);
let username = 'User';
const homeDir = os.homedir();
let currentDir = homeDir;

args.forEach(arg => {
    if (arg.startsWith('--username=')) {
        username = arg.split('=')[1];
    }
});


const printCurrentDir = (current) => console.log(`You are currently in ${current}`);

console.log(`Welcome to the File Manager, ${username}!`);
printCurrentDir(currentDir)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();

rl.on('line', async (input) => {
const trimmedInput = input.trim();

    if (trimmedInput === '.exit') {
        rl.close();
    } else if (trimmedInput === 'up') {
        currentDir = await moveUp(currentDir, homeDir)
        printCurrentDir(currentDir)
    } else if(trimmedInput.startsWith('cd '))  {
        const targetDir = trimmedInput.slice(3).trim()
        currentDir = await changeDirectory(targetDir)
        printCurrentDir(currentDir)
    } else if(trimmedInput === 'ls') {
        await read(currentDir)
        printCurrentDir(currentDir)
    } else if(trimmedInput.startsWith('cat ')) {
        const fileName = trimmedInput.slice(4).trim()
        await readFile(currentDir, fileName)
    } else if(trimmedInput.startsWith('add ')) {
        const fileName = trimmedInput.slice(4).trim()
        await createFile(currentDir, fileName)
    } else if(trimmedInput.startsWith('rn ')) {
        const fileName = trimmedInput.slice(3).trim()
        const renamed = fileName.split(' ')[0]
        const newName = fileName.split(' ')[1]
        await renameFile(renamed, newName)
    } else if (trimmedInput.startsWith('cp ')) {
        const fileName = trimmedInput.slice(3).trim()
        const copyingFile = fileName.split(' ')[0]
        const dest = fileName.split(' ')[1]
        copyFile(copyingFile, dest)
    }
    else {
        console.log('Invalid input');
        printCurrentDir(currentDir);
        rl.prompt();
    }
}).on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});

