import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import KitchenSinkExample from './components/Cards/cards'
import Navbarini from './components/Navbar/navbar';
import BasicExample from './components/Cards/cards';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      <KitchenSinkExample></KitchenSinkExample>
      <NewExpense></NewExpense>
    </div>
  );
}

export default App;
