import React, { useState }from 'react';
import i18n, { initLanguage, Languages } from '@app/i18n';

import Select from '@app/components/UI/Select';
import styled from 'styled-components';

const Language = () => {
    const [lng, setLng] = useState(initLanguage());

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setLng(lng);
    };

  return (
    <CustomSelect
      className="custom-select"
      list={Object.entries(Languages).map(([key, value]) => ({
        key,
        value,
      }))}
      selected={lng}
      onChange={changeLanguage}
    ></CustomSelect>
  );
}


const CustomSelect = styled(Select)`
  &.custom-select * {
    color: var(--palette-text-primary);

    select {
      padding-left: 5px;

      option {
        background-color: var(--palette-primary-main);
      }
    }
  }
`;

export default Language;
