import React, {useEffect} from 'react';
import { changePageName } from '@app/redux/page';
import { useDispatch } from 'react-redux';
import withLoadNameSpace from './withLoadNameSpace';

const withChangePageName = (Wrapped) => ({ t, ...respProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePageName(t('page_name')));
  }, [dispatch, t]);

  return <Wrapped {...{ t, ...respProps }} />;
};

export const withPageName = (nameSpace, lngs, Component) => {
  return withLoadNameSpace(nameSpace, lngs, withChangePageName(Component));
};
