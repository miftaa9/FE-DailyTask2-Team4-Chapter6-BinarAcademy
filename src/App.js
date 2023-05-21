import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
<<<<<<< HEAD
import NewExpense from './components/NewExpense/NewExpense';
// import AboutUs from './components/AbousUs/about-us';
import Amount from './components/AbousUs/pp'
=======
import Footer from './components/Navbar/footers';
import Carousell from './components/Carousel/carousel';
>>>>>>> a23e7338044a1333749fa8b05498288c5e39d8b3

function App() {
  return (
    <div className="App">
      <Carousell/>
      <ColorSchemesExample />
      <div className='example'>
        <Example /> 
      </div>
<<<<<<< HEAD
      <KitchenSinkExample />
      <NewExpense /> 
      {/* <AboutUs></AboutUs> */}
      <Amount></Amount>
      {/* <Footer/> */}
=======
      <BasicExample />
      <Footer/>
>>>>>>> a23e7338044a1333749fa8b05498288c5e39d8b3
    </div>
  );
}

export default App;
