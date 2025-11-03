import { request } from "express";
import { getconnection } from "../configs/DBConfigs.js";



//insert
export async function registerStudent(request,response){  // here we are using middleware 
    try {
        const connection=getconnection();
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
}


//select

export async function DisplayStudent(request,response){
    try {
        console.log("admin-id incontroller ",request.loggedInAdminId);
        const connection=getconnection();
        const[rows]=await connection.query("select * from employee")
    console.log(rows)
    response.status(200).send(rows)
    } catch (error) {
        response.status(500).send("something went rong")
    }
}

//fetching
 export async function FetchStudent(request,response){
    try {
        const connection=getconnection();
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
}

//Deleting
export async function DeleteStudent(request,response){
    try {
        const connection=getconnection()
        const [deleterow]=await connection.query("delete from employee where emp_id="+request.params.id)
        console.log(deleterow.affectedRows)

        if(deleterow.affectedRows === 0){
             response.status(404).send({message:"data is not availbale with id "+request.params.id})
        }else{
            response.status(200).send({message:"employee data deleted"})
        }
       //response.status(200).send(deleterow[0])
        
    } catch (error) {
        response.status(500).send({message:"something went wrong"})
    }
}



//updating
export async function updateStudent(request,response){  // here we are using middleware 
    try {
        const connection=getconnection();
        const {emp_id,emp_name,emp_age,emp_salary,emp_department}=request.body;
        const qry=`update employee set emp_name='${emp_name}',emp_age=${emp_age},emp_salary=${emp_salary},emp_department='${emp_department}'
         where emp_id=${request.params.id}`
        const [result]= await connection.query(qry);
        if(result.affectedRows===1){
            response.status(200).send({message:"Employee data is updated"});
        }
        else{
            response.status(404).send({message:"you entered wrong details"})
        }
    } catch (error) {
        console.log(error)
        
    }
}