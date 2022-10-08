const http = require('http');


const server = http.createServer((req, rsp) => {
    rsp.writeHead(200, {'Content-type':'text/html'});
    rsp.end('Hello node.js');
});

server.listen(3030, () =>{
    console.log("server Listening");
})