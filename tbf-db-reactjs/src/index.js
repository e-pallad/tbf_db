import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from './contents/Home';

function App() {
  return (
      <Router>
          <div className="App">
              <Route exact path="/">
                <Home />
              </Route>
          </div>
      </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)