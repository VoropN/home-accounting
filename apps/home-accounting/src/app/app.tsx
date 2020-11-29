import React, { useState } from 'react';
import { Message } from '@home-accounting/api-interfaces';
import './styles/styles.scss';
import Page from './components/Page';
import RouterConfig from './navigation/RouterConfig';

export const App = () => {
  return (
    <Page>
      <RouterConfig />
    </Page>
  );
};

export default App;
