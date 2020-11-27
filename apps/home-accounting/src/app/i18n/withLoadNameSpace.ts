import { withNamespaces } from 'react-i18next';
import { Languages } from './constants';
import i18n from './i18n';

const withLoadNameSpace = (nameSpace, lngs) => (Component) => {
  Object.keys(Languages).forEach((lng: string) => i18n.addResources(lng, nameSpace, lngs[lng]));

  return withNamespaces(nameSpace)(Component);
}

export default withLoadNameSpace;
