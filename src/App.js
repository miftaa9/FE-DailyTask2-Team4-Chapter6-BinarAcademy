import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import BootstrapCarousel from './components/Carousel/BootstrapCarousel';
import AboutUs from './components/AbousUs/about-us'
import Search from './components/Search/search'
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
      <BootstrapCarousel/>
      <Search />
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
