const http = require ('http')
// fs = file system
const fs = require ('fs')
const server = http.createServer((req,res)=>{
    // res.end(`<h1>Sanity Check</h1>`)
    
    if (req.url === '/'){
    res.writeHead(200, {'content-type':'text/html'})
    console.log ('url worked')
    const homePageHTML = fs.readFileSync(`memory_game/index.html`)
    res.end(homePageHTML)
    } else if (req.url ==="/card-flip.css"){
        console.log ('css worked')
        res.writeHead(200, {'content-type':'text/css'})
        const cardFile = fs.readFileSync(`memory_game/card-flip.css`)
        res.end(cardFile) 
    } else if (req.url ==="/scripts.js"){
        console.log ('scripts worked')
        res.writeHead(200, {'content-type':'text/javascript'})
        const scriptsFile = fs.readFileSync(`memory_game/scripts.js`)
        res.end(scriptsFile) 
    }
    else{
        res.writeHead(404, {'content-type':'text-html'})
        res.end("<h1>These are not the droids you're looking for</h1>")
    }
})
server.listen(3030)