import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import ParentForm from './components/ParentSignup';
import AddressSignup from './components/AddressSignup';
import StudentSignup from './components/StudentSignup';
import TeacherAvailability from './containers/TeacherAvailability';
import Login from './containers/Login';


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/signup/parent' component={ParentForm} />
      <Route path='/signup/address' component={AddressSignup} />
      <Route path='/signup/student' component={StudentSignup} />
      <Route path='/availability' component={TeacherAvailability} />
      <Route path='/login' component={Login} />
    </Switch>
  )
}

export default Router;