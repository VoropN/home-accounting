import React, { useEffect } from 'react';
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

export const SingIn = ({ t }) => {
  return (
    <Form>
      <Title>
        <CustomLoginIcon />
        {t('short_page_name')}
      </Title>
      <Input label={t('email_address')} placeholder={t("email_placeholder")} />
      <Input label={t('password')} type="password" placeholder={t("password_placeholder")} />
      <Button>{t('short_page_name')}</Button>
      <CustomLink to={Path.SING_UP}>{t('no_account')}</CustomLink>
    </Form>
  );
};

const CustomLoginIcon = styled(LoginIcon)`
  fill: var(--palette-secondary-light);
  margin-right: 10px;
`;

export default withPageName(NameSpace.SING_IN, lngs, SingIn);
