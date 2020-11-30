import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IncomeIcon from '@material-ui/icons/MonetizationOn';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import lngs from './locale';
import withLoadNameSpace from '@app/i18n/withLoadNameSpace';
import { NameSpace } from '@app/i18n';
import { Link } from 'react-router-dom';
import { Path } from '@app/navigation/constants';

const SidebarList = ({t}) => {
  const mainList = [
    { to: Path.HOME, primary: t('dashboard'), Icon: DashboardIcon },
    { to: Path.HOME, primary: t('income'), Icon: IncomeIcon },
    { to: Path.HOME, primary: t('expense'), Icon: ShoppingCartIcon },
    { to: Path.HOME, primary: t('reports'), Icon: BarChartIcon },
    { to: Path.HOME, primary: t('integrations'), Icon: LayersIcon },
  ];
  const secondaryList = [
    { to: Path.HOME, primary: t('current_month'), Icon: AssignmentIcon },
    { to: Path.HOME, primary: t('last_quarter'), Icon: AssignmentIcon },
    { to: Path.HOME, primary: t('year-end_sale'), Icon: AssignmentIcon },
  ];

  return (<>
    <List list={mainList}/>
    <ListSubheader inset>{t('saved_reports')}</ListSubheader>
    <List list={secondaryList}/>
    </>);
}

const List = ({ list }) => (
  <div>
    {list.map((props, i) => (
      <CustomLink key={i} {...props} />
      ))}
  </div>
);

const CustomLink = ({ to = null, primary, Icon }) => (
  <Link to={to} className='link'>
  <ListItem button>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={primary} />
  </ListItem>
  </Link>
);

export default withLoadNameSpace(NameSpace.SIDEBAR, lngs, SidebarList);
