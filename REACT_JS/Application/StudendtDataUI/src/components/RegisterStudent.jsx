import { Alert, Container,Row,Form ,Button,Col} from "react-bootstrap";
import { registerStudent } from "../services/StudentService";
import { useState } from "react";

export function RegisterStudent()
{const [formData, setFormData] = useState({
  student_id: "",
  student_name: "",
  age: "",
  gender: "",
  course: "",
  marks: "",
  city: ""
});

const handleChanges = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

const handleSubmit = async (event) => {
  try {
    event.preventDefault();
    console.log(formData);
    const response = await registerStudent(formData);
    console.log(response);
    if (response.ok) {
        alert("✅ Student registered successfully!");
      } else {
        alert("❌ Failed to register student!");
      }
  } catch (error) {
    console.log(error);
  }
};



    return(
        <Container>
        <Row>
             <Col lg={6}> <Alert variant="primary">Register Student</Alert>
                     
             </Col>
             <Row>
                    <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Student ID</Form.Label>
              <Form.Control type="number"
                placeholder="Enter Student ID"
                name="student_id"
                onChange={handleChanges}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student Name"
                name="student_name"
                onChange={handleChanges}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                name="age"
                onChange={handleChanges}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" onChange={handleChanges}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Name"
                name="course"
                onChange={handleChanges}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Marks</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Marks"
                name="marks"
                step="0.01"
                onChange={handleChanges}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                name="city"
                onChange={handleChanges}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register Student
            </Button>
          </Form>

             </Row>
        </Row>
        </Container>
    )
}