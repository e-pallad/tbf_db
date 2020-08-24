import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import Import from './import/Import';
import Eingabe from './eingabe/Eingabe';
//import Erzeugen from './contents/Erzeugen';
//import Auswerten from './contents/Auswerten';
import ExportCard from './cards/ExportCard';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/import" component={Import} />
    <Route path="/eingabe" component={Eingabe} />
    {/* <Route path="/erzeugen" component={Erzeugen} /> */}
    {/* <Route path="/auswerten" component={Auswerten} /> */}
    <Route path="/export" component={ExportCard} />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
)