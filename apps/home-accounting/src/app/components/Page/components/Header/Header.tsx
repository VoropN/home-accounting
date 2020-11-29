import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';
import Language from '../Language';
import Title from '@app/components/UI/Title';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const { pageName } = useSelector((store) => store.pageData);

  return (
    <Container>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        className={cx({ hide: !isSidebarOpen }, 'sidebar')}
      >
        <Title className="sidebar-text">Menu</Title>
      </Sidebar>
      <HeaderMenu>
        <IconButton
          className={cx({ 'sidebar-hidden': !isSidebarOpen }, 'menu-icon')}
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          <MenuIcon className="book" />
          <MenuOpen className="drawer" />
        </IconButton>
        <PageName>{pageName}</PageName>
        <Language />
      </HeaderMenu>
    </Container>
  );
}

const Container = styled.header`
  grid-area: header;
  display: flex;
  z-index: 1;
  background-color: var(--palette-primary-dark);
  color: var(--palette-text-primary);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .sidebar {
    display: flex;
    align-items: center;

    &-text {
      padding-left: 20px;
    }

    &.hide {
      width: 0;
      min-width: 0;
      border-right: none;
    }
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  width: 100%;

  .menu-icon {
    margin: 0 5px;
    color: var(--palette-text-primary);
    transition: 0.3s;

    .drawer {
      display: block;
    }

    .book {
      display: none;
    }

    &.sidebar-hidden {
      margin: 0 10px;

      .drawer {
        display: none;
      }

      .book {
        display: block;
      }
    }
  }
`;

const PageName = styled.h3`
  flex-grow: 1;
  font-weight: 400;
`;

export default Header;
