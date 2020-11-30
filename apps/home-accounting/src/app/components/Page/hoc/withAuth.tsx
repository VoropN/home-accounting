import React from 'react';
import { Redirect } from 'react-router-dom';
import { Path } from '@app/navigation/constants';
import { useSelector } from 'react-redux';

export const withAuth = (Wrapper) => (props) => {
  const {token} = useSelector(state => state.user);

  if (!token) {
    return <Redirect to={Path.SING_IN} />;
  }

  return <Wrapper {...props}/>
};

