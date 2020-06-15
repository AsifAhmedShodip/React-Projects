var http = require('http')

var server = http.createServer((req,res) =>{
    res.end('Server Works')
})

server.listen(3000,'localhost',() => {
    console.log('Server started')
})