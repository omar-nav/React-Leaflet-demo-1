import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Map from './components/auth/Map';

// import Profile from './components/auth/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/map" component={Map} />

      {/* <Route path="/profile" component={Profile} /> */}
    </Switch>
  );
};

export default Routes;