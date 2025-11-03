import express, { request, response } from 'express';
import mysql2, { createConnection } from 'mysql2/promise';

const app=express();
app.use(express.json())
let connection;

async function dbconnection(){
    try{
      connection= await createConnection({
    host:'localhost',
    user:'root',
    password:'cdac',
    port:3306,
    database:'wpt'

})
console.log("connection successfull")
    }catch(error){
console.log("error in db connection")
console.log(error)
    }
    
}

app.get("/",(request,response)=>{
    response.send({Message:"welcome to db connection"})
 
});

//crud
app.get("/employee", async(request,response)=>{
    try {
        const[rows]=await connection.query("select * from employee")
    console.log(rows)
    response.status(200).send(rows)
    } catch (error) {
        response.status(500).send("something went rong")
    }
})
/* without object deconstruction
app.get("/employee", async(request,response)=>{
    try {
        const result=await connection.query("select * from employee")          // this will give both rows and fields
        console .log(result)
    } catch (error) {
        response.status(500).send("something went rong")
    }
})
*/


// fething data using id

app.get("/employee/:id", async (request,response)=>{
    try {
        const [row]=await connection.query("select * from employee where emp_id="+request.params.id);
        console.log(row)
        if(row.length===0){
            response.status(404).send({message:"data is not availbale with id "+request.params.id})
        }else{
      response.status(200).send(row[0])
        }
        
    } catch (error) {
        response.status(500).send("something went wrong")
    }
})


//deleting
app.delete("/employee/:id",async (request,response)=>{
    try {
        const [deleterow]=await connection.query("delete from employee where emp_id="+request.params.id)
        console.log(deleterow.affectedRows)

        if(deleterow.affectedRows === 0){
             response.status(404).send({message:"data is not availbale with id "+request.params.id})
        }else{
            response.status(200).send({message:"employee data deleted"})
        }
       response.status(200).send(deleterow[0])
        
    } catch (error) {
        response.status(500).send({message:"something went wrong"})
    }
})


//inserting
app.post("/employee",async(request,response)=>{  // here we are using middleware 
    try {
        const data=request.body;
        const qry=`insert into employee values (${data.emp_id},'${data.emp_name}',${data.emp_age},${data.emp_salary},'${data.emp_department}')`
        const [result]= await connection.query(qry);
        if(result.affectedRows===1){
            response.status(200).send({message:"Employee data is inserted"});
        }
        else{
            response.status(404).send({message:"you entered wrong details"})
        }
    } catch (error) {
        console.log(error)
        
    }
})
app.listen(3300,()=>{
    dbconnection();
})