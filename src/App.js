import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Logo from './Logo';
import Navigation from './Navigation';
import Topic from './Topic';

function App() {
  return (
    <div className="App">
      <Router>
        <Logo />
      <Navigation />
      <Topic />
      </Router>
    </div>
  );
}

export default App;
