import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import SidebarList from '../Sidebar/components/List';
import { useSelector } from 'react-redux';

const Main = ({ isSidebarOpen, children }) => {
  const rights = useSelector((store) => store.rights);

  return (
    <Container>
      {rights.showSidebar && <Sidebar isSidebarOpen={isSidebarOpen} className="main-sidebar">
        <SidebarList />
      </Sidebar>}
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
  background-color: var(--palette-primary-light);

  --thumbBG: var(--palette-secondary-light);
  --scrollbarBG: var(--palette-primary-main);

  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);

  ::-webkit-scrollbar {
    width: 0.7em;
    cursor: pointer;

    &-track {
      background: var(--scrollbarBG);
    }

    &-thumb {
      background-color: var(--thumbBG);
      border-radius: 10px;
      border: 0.1em solid var(--scrollbarBG);

      &:hover {
        background-color: var(--palette-secondary-main);
      }

      &:active {
        background-color: var(--palette-secondary-dark);
      }
    }
  }
`;

export default Main;
