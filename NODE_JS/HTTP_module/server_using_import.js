import { createServer, request } from "http";
const server=createServer((request,Response)=>{
    Response.write("this is the new website ")
    Response.end();
});
server.listen(4040,()=>{
    console.log("server is started")
});