import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards';
import Example from './components/Modal/addproduct';
import AboutUs from './components/AbousUs/about-us';
import Login from './components/Login/login';

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
