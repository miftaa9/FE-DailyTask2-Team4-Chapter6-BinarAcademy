import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards';
import Example from './components/Modal/addproduct';
<<<<<<< HEAD
import Footer from './components/Footer/footer';
import Carousell from './components/Carousel/carousel';
=======
import AboutUs from './components/AbousUs/about-us';
import Login from './components/Login/login';
>>>>>>> b13d1e04bed65bd32f9bc5a4f3d9f21a9353cbac

function App() {
  return (
    <div className="App">
      {/* <Carousell/> */}
      <Login/>
      <ColorSchemesExample />
      <BasicExample/>
      <div className='example'>
        <Example /> 
      </div>
      {/* <KitchenSinkExample /> */}
      <AboutUs/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
