import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LoginIcon } from '../../../assets/login.svg';
import Button from '../../components/UI/Button';
import CustomLink from '../../components/UI/CustomLink';
import Form from '../../components/UI/Form';
import Input from '../../components/UI/Input';
import Title from '../../components/UI/Title';
import { Path } from '../../navigation/constants';
import { NameSpace } from '@app/i18n';
import lngs from './locale';
import { withPageName } from '@app/i18n/withPageName';
import { login } from '@app/redux/user';
import { useDispatch } from 'react-redux';

export const SingIn = ({ t }) => {
  const [formValue, setFormValue] = useState({ email: null, password: null });
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login(formValue));
  };

  const onInput = ({ field, value }) => {
    setFormValue((state) => ({...state, [field]: value}));
  };

  return (
    <Form>
      <Title>
        <CustomLoginIcon />
        {t('short_page_name')}
      </Title>
      <Input
        onInput={(e) => onInput({ field: 'email', value: e.target.value })}
        label={t('email_address')}
        placeholder={t('email_placeholder')}
      />
      <Input
        onInput={(e) => onInput({ field: 'password', value: e.target.value })}
        label={t('password')}
        type="password"
        placeholder={t('password_placeholder')}
      />
      <Button onClick={onLogin}>{t('short_page_name')}</Button>
      <CustomLink to={Path.SING_UP}>{t('no_account')}</CustomLink>
    </Form>
  );
};

const CustomLoginIcon = styled(LoginIcon)`
  fill: var(--palette-secondary-light);
  margin-right: 10px;
`;

export default withPageName(NameSpace.SING_IN, lngs, SingIn);
