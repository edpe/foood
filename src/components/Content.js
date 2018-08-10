import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';

const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/add-recipe" component={AddRecipe}/>
    </Switch>
  )
}

export default Content
