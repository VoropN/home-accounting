import React from 'react';
import styled from 'styled-components';

const Title: React.FC = ({ children }) => {
  return <CustomTilte>{children}</CustomTilte>;
};

const CustomTilte = styled.h3`
  display: flex;
  justify-content: center;
  margin: 5px 25px 0 0;
  color: var(--font-color);
`;

export default Title;
