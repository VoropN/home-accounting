import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  font-size: 0.8em;
  text-align: right;
  margin-top: 5px;
  color: var(--palette-secondary-main);

  &:hover {
    text-decoration: underline;
    color: var(--palette-secondary-light);
  }
`;

export default CustomLink;
