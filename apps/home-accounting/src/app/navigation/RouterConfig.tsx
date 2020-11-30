import React from 'react';
import Page from '@app/components/Page';
import {
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
          <Route render={() => <h2>Page not found!</h2>} />
      </Switch>
    </Page>
  );
};

export default RouterConfig;
