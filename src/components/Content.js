import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddItem from './AddItem';
import IndexItem from './IndexItem';
import EditItem from './EditItem';

const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/add-item" component={AddItem}/>
      <Route path="/index-item" component={IndexItem}/>
      <Route path='/edit/:id' component={EditItem} />
    </Switch>
  )
}

export default Content
