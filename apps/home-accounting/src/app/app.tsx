import React, { useState } from 'react';
import { Message } from '@home-accounting/api-interfaces';
import './styles/styles.scss';
import AppRouting from './navigation/AppRouting';
import Navbar from './components/Navbar';
import Select from './components/UI/Select';
import styled from 'styled-components';
import i18n, { i18nConst } from './i18n';
import {Languages} from './i18n';

export const App = () => {
  const [lng, setLng] = useState(
    localStorage.getItem(i18nConst.localStorageKey) || i18nConst.fallbackLng
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLng(lng);
  };

  return (
    <>
      <Navbar>
        <Empty />
        <Select
          list={Object.entries(Languages).map(([key, value]) => ({ key, value }))}
          selected={lng}
          onChange={changeLanguage}
        ></Select>
      </Navbar>
      <AppRouting />
    </>
  );
};

const Empty = styled.div`
  flex-grow: 1;
`;

export default App;
