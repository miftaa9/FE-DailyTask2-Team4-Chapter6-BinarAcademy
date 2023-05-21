import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards';
import Example from './components/Modal/addproduct';
import Footer from './components/Footer/footer';
import Carousell from './components/Carousel/carousel';

function App() {
  return (
    <div className="App">
      <Carousell/>
      <Login/>
      <ColorSchemesExample />
      <BasicExample/>
      <div className='example'>
        <Example /> 
      </div>
      {/* <KitchenSinkExample /> */}
      <AboutUs/>
    </div>
  );
}

export default App;
