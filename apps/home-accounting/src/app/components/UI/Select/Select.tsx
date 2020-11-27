import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

const Select = ({ list, selected, onChange }) => {
  const onSelect = ({ target }: { target: HTMLSelectElement }) => onChange(target.value);

  return (
    <FormControl variant="outlined">
      <NativeSelect defaultValue={selected} onChange={onSelect}>
        {list.map(({key, value}) => (<option value={key} key={key}>{value}</option>))}
      </NativeSelect>
    </FormControl>
  );
};

export default Select;
