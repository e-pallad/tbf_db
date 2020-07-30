import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import Eingabe from './contents/Eingabe';
import Import from './contents/Import';
import ExportCard from './component/ExportCard';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/import" component={Import} />
    <Route path="/export" component={ExportCard} />
    <Route path="/eingabe" component={Eingabe} />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
)