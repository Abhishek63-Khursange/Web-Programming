import { compareSync, hashSync } from "bcrypt";
import { getconnection } from "../configs/DBConfigs.js";
import jwt from "jsonwebtoken";


export async function registerAdmin(request,response){  // here we are using middleware 
    try {
        const connection=getconnection();
        const {id,name,phone,email,password}=request.body;
        const encryptpassword=hashSync(password,13) // here we wil not directly store our passwored as it is so we use hashsyn function from bcrypt model to stre encrypt password in database
        const qry=`insert into admin values (${id},'${name}',${phone},'${email}','${encryptpassword}')`
        const [result]= await connection.query(qry);
        if(result.affectedRows===1){
            response.status(200).send({message:"admin created"});
        }
        else{
            response.status(404).send({message:"you entered wrong details"})
        }
    } catch (error) {
        console.log(error)
        
    }
}


//admin login
export async function LoginAdmin(request,response){  // here we are using middleware 
    try {
        const connection=getconnection();
        const {phone,password}=request.body;
        const qry=`select * from admin where phone= '${phone}'`
        const [rows]= await connection.query(qry);
        if(rows.length===0){
            response.status(400).send({message:"Phone number doesn't exist"});
        }
        else{
            if(compareSync(password,rows[0].password)){ //here we comparing password with encryptd password using compareSync method
               const token= jwt.sign({adminID:rows[0].id},'StudentAdmin123')  // after comparing we will generate the token here using jsonwebtoken module
               response.status(200).send({token,message:"Login successfull"}) // and sending that token into resonse 
            }else{
                response.status(400).send({message:"invalid password"});
            }
        }
    } catch (error) {
        console.log(error)
        
    }
}
