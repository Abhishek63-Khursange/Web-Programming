//const http=require('http');// using require we call http module
import {createServer} from 'http';
const server=createServer((request,Response)=>{  // then we create server using createserver function that include in http moudule
    Response.write("hello fist server!!");
    Response.end();
});
server.listen(4040,()=>{  // and deciding port 
    console.log("server is started")
});
