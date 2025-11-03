import { useEffect } from "react";
import {useState} from "react"
import { getuserData } from "./services/FetchData";

export function Function_DataFetch(){

   const [user,setUser] = useState([]);

   const fetchUserEffect =async ()=>{
           try {
            const fetchdata=await getuserData(); // imported from services folder 
            setUser(fetchdata);
           } catch (error) {
            console.log(error)
           }
   }

   useEffect(()=>{
           fetchUserEffect(); 
   },[])

   return(
    <div>
        
            {  user.length===0 ? <h1>Users Not Found</h1>:
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>PHONE</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user)=>{
                                        return(
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        )
                            })
                        }
                    </tbody>
                </table>

        }
    </div>
   )
} 