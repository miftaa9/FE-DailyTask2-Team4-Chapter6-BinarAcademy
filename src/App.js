import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
// import BootstrapCarousel from './components/Carousel/BootstrapCarousel';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <div className='example'>
        <Example /> 
      </div> 
      <BasicExample />
    </div>
  );
}

export default App;
