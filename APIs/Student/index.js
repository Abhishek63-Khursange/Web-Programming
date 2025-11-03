import express, { request, response } from 'express';
import { dbconnection } from './src/configs/DBConfig.js';
import { DeleteStudent, DisplayStudent, insertStudent, specificStudent, updateStudent} from './src/controllers/StudentController.js';
import { AdminLogin, ResgisterAdmin } from './src/controllers/AdminController.js';
import { verifyToken_student } from './src/middleware/VerifyToken_Student.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(request,response)=>{
    response.send({Message:"welcome to db connection"})
 
});

// //insert data
// app.post("/student",verifyToken_student,insertStudent)

// // to fetch all student data
// app.get("/student",verifyToken_student,DisplayStudent);

// // Fetch specific student
// app.get("/student/:id",verifyToken_student,specificStudent);

// //update data
// app.put("/student/:id",verifyToken_student,updateStudent)   

// //delete data
// app.delete("/student/:id",verifyToken_student,DeleteStudent)



// //create-admin
// app.post("/admin",verifyToken_student,ResgisterAdmin)

// //Admin-login
// app.post("/admin/login",AdminLogin);



//for React js project 

//insert data
app.post("/student",insertStudent)

// to fetch all student data
app.get("/student",DisplayStudent);

// Fetch specific student
app.get("/student/:id",specificStudent);

//update data
app.put("/student/:id",updateStudent)   

//delete data
app.delete("/student/:id",DeleteStudent)

//create-admin
app.post("/admin",ResgisterAdmin)

//Admin-login
app.post("/admin/login",AdminLogin);






app.listen(7800,()=>{

  dbconnection();
  console.log("server is started")
})