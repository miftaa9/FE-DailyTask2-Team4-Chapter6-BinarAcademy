import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import Footer from './components/Footer/footer';
// import Login from './components/Login/login';
import AboutUs from './components/AbousUs/about-us'
import Carousell from './components/Carousel/BootstrapCarousel';

function App() {
  return (
    <div className="App">
      <Carousell/>
      {/* <Login/> */}
      <ColorSchemesExample />
      <div className='example'>
        <Example /> 
      </div> 
      <BasicExample />
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
