import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Navbarini() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed-top>
        <Container>
          <Navbar.Brand href="#home"><img className="col-md-auto p-0" src="images/logo.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <DropdownButton id="dropdown-basic-button" title="List Product">
                <Dropdown.Item href="#/pakaian">Pakaian</Dropdown.Item>
                <Dropdown.Item href="#/celana">Celana</Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>
         </Container>
      </Navbar>

      <footer id="footer" className="row">
            <div className="col pr-5">
                <p>KELOMPOK 4 FSW-3</p>
                <p>binarcaracademy@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col pr-5 d-flex flex-column">
                <a className="mb-3 font-weight-bold" href="huda">1. M Huda</a>
                <a className="mb-3 font-weight-bold" href="#why-us">2. Rafli</a>
                <a className="mb-3 font-weight-bold" href="#testimonial">3. Yana</a>
                <a className="mb-3 font-weight-bold" href="#faq">4. Endang</a>
                <a className="mb-3 font-weight-bold" href="#faq">4. Mifta</a>
                <a className="mb-3 font-weight-bold" href="#faq">4. Riza</a>
            </div>
            <div className="col pr-5 mb-3">
                <p>Connect with us</p>
                <div className="d-flex">
                    <a href><img className="mr-3" src="images/icon_facebook.svg" alt="" /></a>
                    <a href><img className="mr-3" src="images/icon_instagram.svg" alt="" /></a>
                    <a href><img className="mr-3" src="images/icon_twitter.svg" alt="" /></a>
                    <a href><img className="mr-3" src="images/icon_mail.svg" alt="" /></a>
                    <a href><img src="images/icon_twitch.svg" alt="" /></a>
                </div>
            </div>
            <div className="col">
                <p>Copyright Binar 2022</p>
            <a className="navbar-brand" href="#home"><img className="col-md-auto p-0" src="images/logo.png" alt="" /></a>
            </div>
        </footer>
    </>
  );
}

export default Navbarini;