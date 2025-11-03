import { compareSync, hashSync } from "bcrypt";
import { getconnection } from "../configs/DBConfig.js";
import jwt from "jsonwebtoken";

//admin creation
export async function ResgisterAdmin(request,response){
       try {
        const connection=getconnection();
        const {id,name,phone,email,password}=request.body;
        const encryptedPassword=hashSync(password,13);
        const qry=`insert into Student_admin values (${id},'${name}','${phone}','${email}','${encryptedPassword}')`
        const [result]=await connection.query(qry);

        if(result.affectedRows===1){
            response.status(200).send({message:"Admin registered"})
        }
        else{
        response.status(404).send({message:"Entered wrong detials"})
        }
       } catch (error) {
        console.log(error)
         response.status(500).send({message:"something went wrong"})
       }
}

//admin-login
export async function AdminLogin(request,response){
    try {
        const connection=getconnection();
        const {phone ,password}=request.body;
        const qry=`select * from Student_admin where phone='${phone}'`
        const[rows]=await connection.query(qry)
        if(rows.length==0){
            resonse.status(404).send({message:"phone number is not exist"})
        }
        else{
            if(compareSync(password,rows[0].password)){
                 const token= jwt.sign({adminID:rows[0].id},'StudentSystem12')  // after comparing we will generate the token here using jsonwebtoken module
                 response.status(200).send({token,message:"Login successfull"}) // and sending that token into resonse 
            }else{
                response.status(400).send({message:"invalid password"});
            }
        }
    } catch (error) {
        console.log(error)
         response.status(500).send({message:"something went wrong"})
    }
}