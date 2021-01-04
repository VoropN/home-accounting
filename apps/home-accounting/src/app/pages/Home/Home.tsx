import { NameSpace } from '@app/i18n';
import lngs from './locale';
import React from 'react';
import { withPageName } from '@app/i18n/withPageName';

const Home = ({ t }) => {
  return (
    <div>Home</div>
  )
}

export default withPageName(NameSpace.HOME, lngs, Home);
