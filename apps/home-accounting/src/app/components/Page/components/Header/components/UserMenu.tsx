import { Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import UserIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '@app/redux/user';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  }

  return (
    <>
      <IconButton className="inherit-color" onClick={handleClick}>
        <UserIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
