import React from 'react';
import Page from '@app/components/Page';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../pages/Home';
import { Path } from './constants';

const RouterConfig = () => {
  return (
    <Page>
      <Switch>
        <Route exact path={Path.HOME} component={Home} />
        <Route path={Path.SING_IN} render={() => <Redirect to={Path.HOME}/>}/>
        <Route path={Path.SING_UP} render={() => <Redirect to={Path.HOME}/>}/>
        <Route render={() => <h2>Page not found!</h2>} />
      </Switch>
    </Page>
  );
};

export default RouterConfig;
