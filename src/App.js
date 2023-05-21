import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import Footer from './components/Navbar/footers';
import Carousell from './components/Carousel/carousel';

function App() {
  return (
    <div className="App">
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
