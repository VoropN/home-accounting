import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ children, ...rest }) => (
  <BaseForm {...rest}>{children}</BaseForm>
);

const BaseForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  padding: 25px 15px 20px;
  max-width: 300px;
  border-radius: 5px;
  background-color: var(--color-secondary);
  box-shadow: 0 2px 1px -1px var(--placeholder-color),
    0 1px 1px 0 var(--color-border), 0 1px 3px 0 var(--placeholder-color);

  > * {
    width: 100%;
  }
`;

export default Form;
