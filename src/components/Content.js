import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';
import IndexItem from './IndexItem';
import EditItem from './components/EditItem';

const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/add-recipe" component={AddRecipe}/>
      <Route path="/index-item" component={IndexItem}/>
      <Route path='/edit/:id' component={EditItem} />
    </Switch>
  )
}

export default Content
