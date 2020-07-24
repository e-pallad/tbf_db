import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Import from './contents/Import';
import Export from './contents/Export';
import Eingabe from './contents/Eingabe';
import Contact from './contents/Contact';

export default function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/import">
                <Import />
              </Route>
              <Route path="/export">
                <Export />
              </Route>
              <Route path="/eingabe">
                <Eingabe />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
          </div>
      </Router>
  )
}