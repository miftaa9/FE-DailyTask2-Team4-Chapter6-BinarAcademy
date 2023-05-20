import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';


function App() {
<<<<<<< HEAD
  return ( <
    div className = "App" >
    <
    header className = "App-header" >
    <
    img src = {
      logo
    }
    className = "App-logo"
    alt = "logo" / >
    <
    p >
    Edit < code > KELOMPOK 4 < /code> and save to reload. <
    /p> <
    a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >
    Learn React team4 <
    /a> <
    /header> <
    /div>
=======
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
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
>>>>>>> 5292db2cfdf3c533ab1e79ebc42621f1fbee8cd5
  );
}

export default App;