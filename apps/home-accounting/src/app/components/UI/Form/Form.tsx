import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ children, ...rest }) => (
  <BaseForm {...rest}>{children}</BaseForm>
);

const BaseForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 25px 15px 20px;
  max-width: 300px;
  border-radius: 5px;
  background-color: var(--palette-primary-dark);
  box-shadow: var(--shadow-3);
  color: var(--palette-text-primary);

  > * {
    width: 100%;
  }
`;

export default Form;
