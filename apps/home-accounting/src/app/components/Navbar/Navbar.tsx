import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const NavBar = ({children}) => {
  return (
    <CustomAppBar position="static" className="custom-app-bar">
      <Toolbar>{children}</Toolbar>
    </CustomAppBar>
  );
}

const CustomAppBar = styled(AppBar)`
 &.custom-app-bar {
   background-color: var(--color-primary-light);
 }
`;

export default NavBar;
