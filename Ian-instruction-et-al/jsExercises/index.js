const fs = require('fs')
const file = process.argv.slice(2)

// let newFile = fs.readFile(file[0], 'utf-8',(err, data)=>{
//     if (err){
//         console.log("ENOENT: no such file or directory, open '"+file+ "'")
//     }else{
//         console.log (data.toUpperCase())
//     }
// })

let asyncFile = fs.readFile(file[0], 'utf-8',(err, data)=>{
    if (err){
        console.log("ENOENT: no such file or directory, open '"+file+ "'")
    }else{
        console.log (data.toUpperCase())
    }
})

async function asyncReadFile(){
    // console.log("async triggered")
    var result = await asyncFile
    console.log(result)
}
asyncReadFile(asyncFile)