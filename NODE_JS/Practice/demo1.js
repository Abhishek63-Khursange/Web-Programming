import { createServer, request } from "http";

const server=createServer((Request,Response)=>{
    Response.write("Hello NODE this is dummy server !!! ok now u can see this");
    Response.end();
});
server.listen(1111,()=>{
    console.log("server is started")
});