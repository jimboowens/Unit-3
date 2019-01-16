const express = require('express')
// console.log(express)
console.log('this is working')
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Hello, World!</h1>')
})
app.listen(3000)