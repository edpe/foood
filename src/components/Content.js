import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';
import IndexRecipe from './IndexRecipe';
import EditRecipe from './EditRecipe';

const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/add-recipe" component={AddRecipe}/>
      <Route path="/index-recipe" component={IndexRecipe}/>
      <Route path='/edit/:id' component={EditRecipe} />
    </Switch>
  )
}

export default Content
