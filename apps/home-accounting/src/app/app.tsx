import React, { useEffect } from 'react';
import { Message } from '@home-accounting/api-interfaces';
import './styles/styles.scss';
import { useSelector } from 'react-redux';
import RouterConfig from './navigation/RouterConfig';
import RouterConfigWithoutAuth from './navigation/RouterConfigWithoutAuth';
import { useDispatch } from 'react-redux';
import { fetchRights } from '@app/redux/rights';

export const App = () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRights());
  }, [dispatch]);

  if (!token) {
    return <RouterConfigWithoutAuth />
  }

  return <RouterConfig />;
};

export default App;
