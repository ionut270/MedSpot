import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App/app_manager'

import './Styles/index.less'

// Import config and mutate it into the localstorage of the browser
const config = require('./config.json');
localStorage.config = config;


class Comp extends React.Component {
  render = () =>
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
}

ReactDOM.render(
  <React.StrictMode>
    <Comp />
  </React.StrictMode>,
  document.getElementById('root')
);
