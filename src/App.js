import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import Footer from './components/Footer/footer';
import Carousell from './components/Carousel/carousel';
import Login from './components/Login/login';
import Cards from './components/AbousUs/about-us';

function App() {
  return (
    <div className="App">
      <Login/>
      <Carousell/>
      <ColorSchemesExample />
      <div className='example'>
        <Example /> 
      </div>
      <BasicExample />
      <Footer/>
    </div>
  );
}

export default App;
