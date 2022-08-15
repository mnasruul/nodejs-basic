/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
 const path = require('path');
const inputfilePath = path.resolve(__dirname, 'input.txt'); 
const outputfilePath = path.resolve(__dirname, 'output.txt'); 
const writableStream = fs.createWriteStream(outputfilePath);
 

const readableStream = fs.createReadStream(inputfilePath, {
    highWaterMark: 15
});
 
readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()} \n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

