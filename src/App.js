import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import NewExpense from './components/NewExpense/NewExpense';
// import AboutUs from './components/AbousUs/about-us';
import Amount from './components/AbousUs/pp'

function App() {
  return (
    <div className="App">
      <Carousell/>
      <ColorSchemesExample />
      <div className='example'>
        <Example /> 
      </div>
      <KitchenSinkExample />
      <NewExpense /> 
      {/* <AboutUs></AboutUs> */}
      <Amount></Amount>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
