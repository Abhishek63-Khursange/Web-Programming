import { Container,Col,Alert,Row } from "react-bootstrap"
export function Dashboard()
{
    return(
        <Container className="mt-2">
           <Row>
            <Col lg={6}>
            <Alert variant="primary">Welcome to The Student CRUD App</Alert>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum vitae? Cupiditate voluptas, accusamus quasi nisi id blanditiis molestias rem repellendus similique molestiae commodi natus quaerat perferendis neque eum optio.</p>
            </Col>
            <Col lg={6}>
            <Alert variant="primary">Update Student Delete Student Insert Student Display Student</Alert>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam molestias culpa delectus obcaecati. Optio iste, placeat similique suscipit minus nam eius repudiandae sapiente nobis, aperiam officiis animi dicta illo?</p>
            </Col>
            </Row> 
        </Container>
    )
}