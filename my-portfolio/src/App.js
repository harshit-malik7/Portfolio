import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,Routes} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
