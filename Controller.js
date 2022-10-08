import { createRequire } from "module";
const require = createRequire(import.meta.url); 


const http = require('http');
import {socketController} from './lrlModules/socketController.js';


const server = http.createServer((req, rsp) => {
    rsp.writeHead(200, {'Content-type':'text/html'});
    rsp.end('Hello node.js');
});

server.listen(3030, () =>{
    console.log("server Listening");
});


const socket = new socketController();
