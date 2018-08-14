import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';
import IndexItem from './IndexItem';

const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/add-recipe" component={AddRecipe}/>
      <Route path="/index-item" component={IndexItem}/>
    </Switch>
  )
}

export default Content
