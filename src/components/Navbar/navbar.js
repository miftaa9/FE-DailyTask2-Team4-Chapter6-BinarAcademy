import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Navbarini() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img className="col-md-auto p-0" src="images/logo.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Home</Nav.Link>
            <DropdownButton id="dropdown-basic-button" title="List Product">
                <Dropdown.Item href="#/action-1">Pakaian</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Celana</Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
         </Container>
      </Navbar>
    </>
  );
}

export default Navbarini;