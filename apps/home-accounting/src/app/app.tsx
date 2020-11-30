import React from 'react';
import { Message } from '@home-accounting/api-interfaces';
import './styles/styles.scss';
import { useSelector } from 'react-redux';
import RouterConfig from './navigation/RouterConfig';
import RouterConfigWithoutAuth from './navigation/RouterConfigWithoutAuth';

export const App = () => {
  const { token } = useSelector((state) => state.user);

  if (!token) {
    return <RouterConfigWithoutAuth />
  }

  return <RouterConfig />;
};

export default App;
