import {Nav ,Container,Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
export function Navigationbar()
{
    return(
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">

            <Container>

                <Navbar.Brand href="#home">Employee App</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                      <Nav className="me-auto">
                          <LinkContainer to='/'>
                              <Nav.Link >Dashboard</Nav.Link>
                          </LinkContainer>

                          <LinkContainer to="/register-employee">
                              <Nav.Link>Register Employee</Nav.Link>
                          </LinkContainer>

                          <LinkContainer to="/employee-list">
                              <Nav.Link >Employees List</Nav.Link>
                          </LinkContainer>
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}