import React from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import AddRecipe from './pages/AddRecipe';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <Route exact path="/add-recipe" component={AddRecipe} />
  </App>
    , document.getElementById('root'));
registerServiceWorker();
