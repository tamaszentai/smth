import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      
      </Router>
    </div>
  );
}

export default App;
