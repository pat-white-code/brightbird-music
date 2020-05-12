import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import ParentForm from './components/ParentSignup';
import AddressSignup from './components/AddressSignup';
import StudentSignup from './components/StudentSignup';


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/signup/parent' component={ParentForm} />
      <Route path='/signup/address' component={AddressSignup} />
      <Route path='/signup/student' component={StudentSignup} />
    </Switch>
  )
}

export default Router;