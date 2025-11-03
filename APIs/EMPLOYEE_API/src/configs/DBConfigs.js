import {createConnection} from 'mysql2/promise';
let connection=null;
export async function dbconnection(){
    
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
    return connection;
}

export function getconnection(){
    return connection;
}