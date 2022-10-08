import { createRequire, syncBuiltinESMExports } from "module";
const require = createRequire(import.meta.url); 


const http = require('http');
const websocket = require('ws');


const server = http.createServer((req, rsp) => {
    rsp.writeHead(200, {'Content-type':'text/html'});
    rsp.end('Hello node.js');
});

server.listen(3030, () =>{
    console.log("server Listening");
});
const wbss = new websocket.Server({server:server});

wbss.on('connection', (wb) => {
    console.log('socket connected');
    wb.send("socket Service on");
    
});


