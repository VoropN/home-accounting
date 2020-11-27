import React from 'react';
import styled from 'styled-components';

const Button = ({
  type = 'button',
  title = '',
  children = null,
  ...rest
}: {
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  children?: React.ReactNode | string;
}) => {
  return (
    <BaseButton type={type} {...rest}>
      {title}
      {children}
    </BaseButton>
  );
};

const BaseButton = styled.button`
  height: 100%;
  margin: 15px 0 0;
  display: block;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--color-primary-light);
  background: var(--color-primary-light);
  padding: 10px 5px;
  color: var(--color-secondary);
  text-transform: uppercase;
  font-weight: 400;

  &:hover {
    filter: hue-rotate(35deg);
  }
`;

export default Button;
