import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg"></img>
        <div className='button-container'>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={}>About me</button>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={}>Contact me</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
