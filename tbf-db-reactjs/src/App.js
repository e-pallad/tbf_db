import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Table from './contents/Table';


export default function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
          </div>
      </Router>
  )
}