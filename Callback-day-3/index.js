const express = require('express')
// console.log(express)
console.log('this is working')
const app = express()
const port = process.argv[2]
// console.log(port)
app.use(express.static('public'))



app.get('/', (req, res)=>{
    // console.log (req)
    console.log('someone hit our site!')
    res.send('<h1>Hello, World!</h1>')

})

app.get('/class', (req,res)=>{
    res.send('<p>Hello, Class!</p>')
})

app.listen(port)