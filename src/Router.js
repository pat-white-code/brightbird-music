import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import ParentForm from './components/ParentSignup';


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/signup/parent' component={ParentForm} />
    </Switch>
  )
}

export default Router;