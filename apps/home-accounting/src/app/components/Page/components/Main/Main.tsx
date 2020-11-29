import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import List from '../Sidebar/components/List';

const Main = ({ isSidebarOpen, children }) => {
  return (
    <Container>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        className="main-sidebar"
      >
        <List.MainListItems />
        <List.SecondaryListItems />
      </Sidebar>
      <Body>{children}</Body>
    </Container>
  );
};

const Container = styled.main`
  grid-area: main;
  display: flex;
  height: calc(100vh - 95px);

  & .main-sidebar {
    color: var(--palette-text-primary);
  }
`;

const Body = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-grow: 1;
  overflow: auto;
  height: 100%;

  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);

  ::-webkit-scrollbar {
    width: 1.4em;

    &-track {
      background: var(--scrollbarBG);
    }

    &-thumb {
      background-color: var(--thumbBG);
      border-radius: 25px;
      border: 0.57em dashed var(--scrollbarBG);
    }
  }
`;

export default Main;
