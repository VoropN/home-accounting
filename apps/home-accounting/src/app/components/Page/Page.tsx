import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeContext } from './components/Theme';

const Page = ({ children }) => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Container className={isDarkMode ? 'dark' : 'light'}>
      <Header {...{ isSidebarOpen, toggleSidebar }} />
      <Main {...{ isSidebarOpen }}>{children}</Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 65px 1fr 30px;
`;

export default Page;
