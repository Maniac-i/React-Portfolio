import React from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
    <div>
    <NavBar />
    <Route exact path='/' component={AboutMe} />
    <Route exact path='/portfolio' component={Portfolio} />
    <Route exact path='/contact' compnent={Contact} />
   </div>
   </Router>
  );
}

export default App;
