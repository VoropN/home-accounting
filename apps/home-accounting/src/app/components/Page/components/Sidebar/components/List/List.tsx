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

const MainListItems = ({t}) => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={t('dashboard')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <IncomeIcon />
        </ListItemIcon>
        <ListItemText primary={t('income')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary={t('expense')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={t('reports')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary={t('integrations')} />
      </ListItem>
    </div>
  );
}

const SecondaryListItems= ({t}) => {
  return (
    <div>
        <ListSubheader inset>{t('saved_reports')}</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={t('current_month')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={t('last_quarter')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={t('year-end_sale')} />
      </ListItem>
    </div>
  );
}

export default {
  MainListItems: withLoadNameSpace(NameSpace.SIDEBAR, lngs)(MainListItems),
  SecondaryListItems: withLoadNameSpace(NameSpace.SIDEBAR, lngs)(SecondaryListItems),
}
