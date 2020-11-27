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
  color: var(--color-primary-light);

  &:hover {
    text-decoration: underline;
    filter: hue-rotate(35deg);
  }
`;

export default CustomLink;
