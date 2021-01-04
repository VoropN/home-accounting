import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return <Container {...props}>Copyright © HOME ACCOUNTING {new Date().getFullYear() }</Container>;
}

const Container = styled.footer`
  grid-area: footer;
  background-color: var(--palette-primary-dark);
  color: var(--palette-text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`;

export default Footer;
