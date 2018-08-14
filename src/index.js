import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import IndexItem from './components/IndexItem';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <App/>
  </Router>, document.getElementById('root'));
registerServiceWorker();
