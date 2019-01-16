const fs = require ('fs')
const arg = process.argv
// console.log(typeof(arg))
console.log(`Hello, ${arg[2]}`)

// this can send node(in binary) to the command line, so don't do that 
// console.log(fs.readFileSync(arg[0]).toString())
// this sends back this program as a string into the command line
// console.log(fs.readFileSync(arg[1]).toString())

console.log(fs.readFileSync(arg[2]))