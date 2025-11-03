import express, { request, response } from 'express';
import cors from 'cors';
import { dbconnection } from './src/configs/DBConfigs.js';
import { registerStudent} from './src/controllers/EmployeeController.js'; //insert api 
import { DisplayStudent } from './src/controllers/EmployeeController.js';  //select api
import { FetchStudent } from './src/controllers/EmployeeController.js'; // fetch api
import { DeleteStudent } from './src/controllers/EmployeeController.js'; //delete api
import { updateStudent } from './src/controllers/EmployeeController.js'; //update api
import { LoginAdmin, registerAdmin } from './src/controllers/AdminControllers.js';// admin api
import { verifyToken } from './src/middleware/verifyToken.js';

const app=express();
app.use(express.json())
app.use(cors());

app.get("/",(request,response)=>{
    response.send({Message:"welcome to db connection"})
 
});

// //crud
// app.get("/employee",verifyToken,DisplayStudent );

// // fething data using id

// app.get("/employee/:id",verifyToken,FetchStudent);


// //deleting
// app.delete("/employee/:id",verifyToken,DeleteStudent);


// //inserting
// app.post("/employee",verifyToken,registerStudent);

// //updating
// app.put("/employee/:id",verifyToken,updateStudent)


// //admin 
// app.post("/admin",verifyToken,registerAdmin); // for this use bcrypt module to encryplty store our password in db

// //admin login
// app.post("/admin/login",LoginAdmin) // for this we use jsonwebtoken module to generate the jwt token 




// for React js frontend checking
//crud
app.get("/employee",DisplayStudent );

// fething data using id

app.get("/employee/:id",FetchStudent);


//deleting
app.delete("/employee/:id",DeleteStudent);


//inserting
app.post("/employee",registerStudent);

//updating
app.put("/employee/:id",updateStudent)


//admin 
app.post("/admin",registerAdmin); // for this use bcrypt module to encryplty store our password in db

//admin login
app.post("/admin/login",LoginAdmin) // for this we use jsonwebtoken module to generate the jwt token 


app.listen(3300,()=>{
    dbconnection();
})