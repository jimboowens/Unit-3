const express = require('express')
const http = require ('http')
// console.log(http)

// createServer takes 1 arg, a f(n) to run when someone makes an HTTP connection to this program
// the f(n) takes two parameters, a request and a response

const server = http.createServer((req, res)=>{

    // this makes an req parameter and returns that as well as the res...?
    console.log('someone hit our http server')
    res.end(`<h1>Hello World!</h1>`)
})

server.listen(3000)