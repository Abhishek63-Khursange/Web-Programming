import {createServer} from 'http'; // importing function createServer from http module

const server=createServer((Request,Response)=>{
    Response.write("WELCOME TO THE PRACT-EZ PORTAL!!!!");
    Response.end();
    
});

server.listen(5500,()=>{
    console.log("Server is started")
});