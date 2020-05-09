import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import ParentForm from './components/ParentSignup';
import AddressForm from './components/AddressForm';


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/signup/parent' component={ParentForm} />
      <Route path='/signup/address' component={AddressForm} />
    </Switch>
  )
}

export default Router;