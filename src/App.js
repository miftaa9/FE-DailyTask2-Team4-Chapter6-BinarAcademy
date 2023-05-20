import logo from './logo.svg';
import './App.css';
import Navbarini from './components/Navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbarini></Navbarini>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>KELOMPOK 4</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Belajar React
        </a>
      </header>
    </div>
  );
}

export default App;
