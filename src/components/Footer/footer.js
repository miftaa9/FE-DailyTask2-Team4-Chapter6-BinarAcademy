import { blue } from '@mui/material/colors';
import './footer.css'

function Footer() {
  return (
    <>
      <footer id="footer" className="row">
            <div className="col pr-5">
                <p>KELOMPOK 4 FSW-3</p>
                <p>binarcaracademy@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col pr-5 d-flex flex-column">
                <a className="mb-3 font-weight-bold" href="https://github.com/miftaaaaaa/FE-DailyTask2-Team4-Chapter6-BinarAcademy/commits/main">M Huda</a>
                <a className="mb-3 font-weight-bold" href="#why-us">Rafli</a>
                <a className="mb-3 font-weight-bold" href="#testimonial">Yana</a>
                <a className="mb-3 font-weight-bold" href="#faq">Endang</a>
                <a className="mb-3 font-weight-bold" href="#faq">Mifta</a>
                <a className="mb-3 font-weight-bold" href="#faq">Riza</a>
            </div>
            <div className="col pr-5 mb-3">
                <p>Connect with us</p>
                <div className="logo d-flex">
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

export default Footer;