import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import { Path } from './constants';

const AppRouting = () => {
  return (
    <Router>
      <Switch>
        <Route path={Path.SING_IN} component={SingIn} />
        <Route path={Path.SING_UP} component={SingUp} />
      </Switch>
    </Router>
  );
};

export default AppRouting;
