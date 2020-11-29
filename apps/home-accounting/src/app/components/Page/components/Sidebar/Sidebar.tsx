import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';

const Sidebar = ({
  isSidebarOpen,
  children = null,
  className = null,
  ...restProps
}) => {
  return (
    <Container
      className={cx({ open: isSidebarOpen }, className)}
      {...restProps}
    >
      {children}
    </Container>
  );
};

const Container = styled.aside`
  width: 60px;
  min-width: 60px;
  overflow: hidden;
  transition: 0.3s all;
  color: var(--palette-text-light);
  background-color: var(--palette-secondary-light);
  border-right: 1px solid var(--palette-primary-main);

  .MuiListSubheader-root,
  .MuiButtonBase-root {
    min-width: max-content;
    flex: 0, 0, auto;
    flex-shrink: 0;
  }

  &.open {
    width: 250px;
    min-width: 250px;
  }
`;

export default Sidebar;
