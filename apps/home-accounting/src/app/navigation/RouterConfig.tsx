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

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Route path={Path.SING_IN} component={SingIn} />
        <Route path={Path.SING_UP} component={SingUp} />
        <Route render={() => <h2>Page not found!</h2>} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
