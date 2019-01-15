const express = require('express')
const http = require ('http')
// console.log(http)

// createServer takes 1 arg, a f(n) to run when someone makes an HTTP connection to this program
// the f(n) takes two parameters, a request and a response

const server = http.createServer((req, res)=>{
    counter = 0
    // this makes an req parameter and returns that as well as the res...?
    console.log('someone hit our http server')
    res.end(`<h1>Hello World!</h1>`)
    //don't log this cause it's more than what the local command line can hold; you can reference aspects of it with the .'' thing
    if (counter === 0){
    console.log (req)
    console.log (res)
        counter ++
    }
})

server.listen(3010)

function n (x){
    return function(y){
        console.log(x+y)
    }
}

n(2)(3)

