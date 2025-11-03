import { request, response } from "express";
import { getconnection } from "../configs/DBConfig.js";


//inserting data
export async function insertStudent(request,response){
  try {
    
    const connection=getconnection();
    const data=request.body;
    const qry=`insert into student values ('${data.student_id}','${data.student_name}',${data.age},'${data.gender}',
                                            '${data.course}',${data.marks},'${data.city}')`
    const [result]=await connection.query(qry)
    
    if(result.affectedRows===1){
      response.status(200).send({message:"student details is added !!"})
    }
    else{
      response.status(404).send({message:"you enterd wrong detials"})
    }
  } catch (error) {
      console.error(error);
    response.status(500).send({ message: "Something went wrong" });
  }
}


//displaying all student data
// Fetch all students
export async function DisplayStudent(request, response) {
  try {
    console.log("admin-id incontroller ",request.loggedInAdminId);
    const connection = getconnection(); // 
    const [rows] = await connection.query("SELECT * FROM student");

    console.log(rows);
    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Something went wrong" });
  }
}

//fetch specific student
export async function specificStudent(request,response){
  try {
       const connection=getconnection();
       const [rows]=await connection.query("select * from student where student_id="+request.params.id)    
        console.log(rows)
      if(rows.length===0){
        response.status(400).send({message:"Student is not present with id "+request.params.id})
      }  else{
        response.status(200).send(rows[0])
      }

  } catch (error) {
    console.log(error)
    response.status(500).send({ message: "Something went wrong" });
  }
}


//updating data
export async function updateStudent(request,response){
  try {
    const connection=getconnection();
    const{student_id,student_name,age,gender,course,marks,city}=request.body;
    const qry=`update student set student_name='${student_name}',age=${age},gender='${gender}',
             course='${course}',marks=${marks},city='${city}' where student_id=${request.params.id}`;
   const[rows]=await connection.query(qry);
   if(rows.affectedRows===1){
        response.status(200).send({message:"Student details updated !!"});
   }else{
    response.status(404).send({message:"Entered wrong details"});
   }        

    
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: "Something went wrong" });
  }
}

//delete student
export async function DeleteStudent(request,response){
  try {
    const connection=getconnection();
    const [deleterow]=await connection.query("delete from student where student_id="+request.params.id);
    console.log(deleterow.affectedRows);
    

    if(deleterow.affectedRows===0){
    response.status(404).send({message:`student details with id ${request.params.id} is not available`})
    }else{
      response.status(200).send({message:"student details is deleted !!"})
    }
     response.status(200).send(deleterow[0])
  } catch (error) {
    console.log(error)
    response.status(500).send({message:"something went wrong"})
    }
  }

