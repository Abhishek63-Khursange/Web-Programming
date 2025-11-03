import { useState } from "react"
import { Container,Col,Row,Alert,Table } from "react-bootstrap"
import { getallStudent } from "../services/StudentService";
import { useEffect } from "react";
export function StudentList(){

   // backend code
       const [student,setStudent]=useState([]);

       const FetcStudent = async ()=>{
        try {
             const data =await getallStudent();
             setStudent(data);
        } catch (error) {
            console.log(error)
        }
       }

        useEffect(()=>{
            FetcStudent();

       },[])

       
    return(
       
        <Container>
            <Row>
                <Col lg={12}> <Alert variant="primary">Student List</Alert>

                </Col>
            </Row>
           
           {
            student.length===0 ? <h1>Student data not found!!</h1>:
             <Table lg={12}>
                <thead>
                    <tr>
                        <th>Student id</th>
                        <th>Stuednt name</th>
                        <th>Student age</th>
                        <th>Student Gender</th>
                        <th>Course</th>
                        <th>Marks</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((student)=>{
                                    return(
                                        <tr>
                                        <td>{student.student_id}</td>
                                        <td>{student.student_name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.course}</td>
                                        <td>{student.marks}</td>
                                        <td>{student.city}</td>
                                        </tr>
                                    )
                        })
                    }
                </tbody>
            </Table>
           }
                   
        </Container>
    )
}