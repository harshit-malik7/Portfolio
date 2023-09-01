import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
