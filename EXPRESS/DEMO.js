import express, { request, response } from 'express';

const app=express();

app.get("/",(request,response)=>{
   // response.send("this is home page ft.express")
   response.send({message:"Welcome to home page"})
})
//sub url
app.get("/sign-up",(request,response)=>{
    //response.send("This is sign-up page ft.express")
    response.send({message:"This is sign-up page ft.express"})
})
//sum of two number using user input
app.get("/sum/:a/:b",(request,response)=>{
    const n1=parseInt(request.params.a);
    const n2=parseInt(request.params.b);
    const  n3=n1+n2;
    //response.send(`sum of ${n1} and ${n2} is ${n3}`)
    response.send({message:`sum of ${n1} and ${n2} is ${n3}`})
})

//factorial number
app.get("/fact/:num",(request,response)=>{
   try{const factNum=parseInt(request.params.num);
    if(factNum<=0){
        response.status(400).send({message:"invaild number"})
    }
    else {
        
        var f=1;
        for(var i=1;i<=factNum;i++){
            f=f*i
        }
      //  response.send(`factorial of ${factNum} is ${f}`)
      response.send({message:`factorial of ${factNum} is ${f}`})
    }}
    catch(error){
        response.status(500).send({message:"something went wrong"})


    }
})


app.listen(1111,()=>{
    console.log("server is started on 1111 port")
})