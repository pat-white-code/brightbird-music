import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';


const Router = () => {
  return (
    <Switch>
      <Route exactPath="/" component={Home} />
    </Switch>
  )
}

export default Router;