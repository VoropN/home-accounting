import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styled from 'styled-components';

const Select = ({ list, selected, onChange, ...restProps }) => {
  const onSelect = ({ target }: { target: HTMLSelectElement }) => onChange(target.value);

  return (
    <CustomFormControl variant="outlined" {...restProps}>
      <NativeSelect defaultValue={selected} onChange={onSelect}>
        {list.map(({ key, value }) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </NativeSelect>
    </CustomFormControl>
  );
};

const CustomFormControl = styled(FormControl)`
  transition: .3s all;

  .MuiInput-underline:after,
  .MuiInput-underline:before {
    border-bottom: none;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid var(--palette-primary-light);
  }

  .Mui-focused.MuiInput-underline:after {
    border-bottom: 2px solid var(--palette-primary-main);
  }
`;

export default Select;
