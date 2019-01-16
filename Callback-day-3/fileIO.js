// FS is part of node
const fs = require("fs");

fs.readFile('crop.js','utf-8',(error,contents)=>{
    console.log(error)
    // by default, the return value of readFile, is a buffer
    console.log("Contents of package.json...");
    console.log(contents)
    // console.log(contents.toString())
});

fs.readFile('package.json','utf-8',(error,contents)=>{
    console.log(error)
    // if(error) throw error
    // by default, the return value of readFile, is a buffer
    console.log("Contents of packagee.json...");
    console.log(contents)
});

const contents = fs.readFileSync('crop.js','utf-8');
console.log(contents)
const contents2 = fs.readFileSync('package.json','utf-8');
console.log(contents2)