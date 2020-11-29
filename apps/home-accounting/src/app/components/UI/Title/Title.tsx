import React from 'react';
import styled from 'styled-components';

const Title = ({ children, ...props }) => {
  return <CustomTilte {...props}>{children}</CustomTilte>;
};

const CustomTilte = styled.h3`
  display: flex;
  justify-content: center;
  margin: 5px 25px 0 0;
  color: var(--palette-text-primary);
  font-weight: 400;
`;

export default Title;
