import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import Footer from './components/Footer/footer';
// import Login from './components/Login/login';
import AboutUs from './components/AbousUs/about-us'
import Carousell from './components/Carousel/BootstrapCarousel';
// import Detail from './components/Modal/detail';
import SearchComponent from './components/Search/search';

function App() {
  return (
    <div className="App">
      <Carousell/>
      <SearchComponent/>
      {/* <Login/> */}
      <ColorSchemesExample />
      <div className='example'>
        <Example /> 
      </div> 
      <BasicExample />
      {/* <Detail/> */}
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
