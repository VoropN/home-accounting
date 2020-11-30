import { NameSpace } from '@app/i18n';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LoginIcon } from '../../../assets/login.svg';
import Button from '../../components/UI/Button';
import CustomLink from '../../components/UI/CustomLink';
import Form from '../../components/UI/Form';
import Input from '../../components/UI/Input';
import Title from '../../components/UI/Title';
import { Path } from '../../navigation/constants';
import lngs from './locale';
import { withPageName } from '@app/i18n/withPageName';

export const SingUp = ({ t }) => {
  return (
    <Form>
      <Title>
        <CustomLoginIcon />
        {t('short_page_name')}
      </Title>
      <Input
        label={t('first_name')}
        placeholder={t('first_name_placeholder')}
      />
      <Input label={t('last_name')} placeholder={t('last_name_placeholder')} />
      <Input label={t('email_address')} placeholder={t('email_placeholder')} />
      <Input
        label={t('password')}
        type="password"
        placeholder={t('password_placeholder')}
      />
      <Button> {t('short_page_name')} </Button>
      <CustomLink to={Path.SING_IN}>{t('have_account')}</CustomLink>
    </Form>
  );
};

const CustomLoginIcon = styled(LoginIcon)`
  fill: var(--palette-secondary-light);
  margin-right: 10px;
`;

export default withPageName(NameSpace.SING_UP, lngs, SingUp);
