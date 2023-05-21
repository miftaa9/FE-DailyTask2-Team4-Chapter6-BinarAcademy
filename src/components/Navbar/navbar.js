import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbarini() {
  return (
    <>
      <Navbar className='navbar' fixed='top' bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand href="#home"><img className="col-md-auto p-0" src="images/logo.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <DropdownButton id="dropdown-basic-button" title="List Product">
                <Dropdown.Item href="#/pakaian">Baju</Dropdown.Item>
                <Dropdown.Item href="#/celana">Celana</Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="#footer">About Us</Nav.Link>
          </Nav>
         </Container>
      </Navbar>
    </>
  );
}

export default Navbarini;