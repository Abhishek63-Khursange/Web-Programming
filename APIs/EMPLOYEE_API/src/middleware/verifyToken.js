

import jwt from "jsonwebtoken";

export function verifyToken(request,resonse,next){
       const authHeader=request.get('Authorization'); //to define the which method we use in request header
       if(authHeader){
        const token=authHeader.split(" ")[1]; // here we compare jwt token with login user token  and 
        // here also we use split function to split the becuaese we will get whole jwt token string with "Bearer keyword so we have to split it "
        jwt.verify(token,'StudentAdmin123',(error,payload)=>{  // verify method is used to verify the jwt token and user using payload 
            if(error){
                resonse.status(401).send({messgae:"token is invalid"});
            }
            else{
                console.log(payload);// we will display the user who call the api 
                request.loggedInAdminID=payload.adminId;// using this 
                next(); // this will call the request header 

            }
        })
       }
       else{
         resonse.status(401).send({messgae:"token is invalid"});
       }
}