import React, { useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

const Input = ({
  type = 'text',
  label = null,
  value = '',
  placeholder = '',
  active = false,
  ...rest
}) => {
  const [inputActive, setActive] = useState(active);
  const [inputText, setText] = useState(value);

  return (
    <Container>
      {label && (
        <Title className={cx({ active: inputActive || inputText })}>
          {label}
        </Title>
      )}
      <InputContainer className={cx({ active: inputActive || inputText })}>
        <BaseInput
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={(e) => setText(e.target.value)}
          value={inputText}
          placeholder={inputActive ? placeholder : '' }
          {...{ type, ...rest }}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.label`
  height: 100%;
  margin: 12px 0 0;
  position: relative;
  display: block;
`;

const InputContainer = styled.div`
  border: 1px solid var(--palette-secondary-light);
  overflow: hidden;
  border-radius: 4px;
  will-change: opacity, transform, color;

  &:hover:not(.active),
  &.active {
    box-shadow: 0 0px 0px -1px var(--palette-secondary-light),
      0 1px 1px 0 var(--palette-secondary-main),
      1px 1px 5px -3px var(--palette-secondary-dark);
  }
`;

const Title = styled.h4`
  font-size: 1.1em;
  min-width: max-content;
  position: absolute;
  transform: translate(10px, -50%);
  top: 50%;
  display: block;
  color: var(--palette-text-secondary);
  margin: 0;
  padding: 0 5px;
  transition: all 0.2s;
  top: 50%;
  user-select: none;
  font-weight: 400;

  &.active {
    z-index: 1;
    background-color: var(--palette-primary-dark);
    transform: translate(6px, 0);
    top: -7px;
    font-size: 0.9em;
    color: var(--palette-text-secondary);
  }
`;

const BaseInput = styled.input`
  width: 100%;
  padding: 12px 16px 14px;
  border: none;
  background-color: transparent;
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  padding: 14px 10px;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  color: var(--palette-text-primary);

  &::placeholder {
    color: var(--palette-text-disabled);
  }
`;

export default Input;
