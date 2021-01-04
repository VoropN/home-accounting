import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import { Path } from './constants';
import PageWithoutAuth from '@app/components/Page';

const RouterConfigWithoutAuth = () => {
  return (
    <PageWithoutAuth>
      <Switch>
        <Route path={Path.SING_IN} component={SingIn} />
        <Route path={Path.SING_UP} component={SingUp} />
        <Route render={() => <Redirect to={Path.SING_IN} />} />
      </Switch>
    </PageWithoutAuth>
  );
};

export default RouterConfigWithoutAuth;
