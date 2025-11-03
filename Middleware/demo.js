import express, { response } from 'express';
import { request } from 'http';

const app=express();

app.use(express.json()); // it will apply middleware on all url and allow json data
/* or
app.post("/",express.json(),(req,res)=>{   this is manually method to apply middleware on url
     response.send("welcome to index page")
})
*/
app.post("/",(request,response)=>{
    response.send({message:"welcome"})
    console.log(request.body)
});

app.post("/sum",(request,response)=>{
    const n1=request.body.a;
    const n2=request.body.b;
    const n3=n1+n2;
    console.log({sum:n3});
})

app.post("/factorial",(request,response)=>{
    console.log(request.body);
    response.send({message:"welxome to fact page"})
})
app.listen(2222);