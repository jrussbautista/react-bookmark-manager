import React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import { LINKS } from 'constants/app';

type DrawerProps = {
  onClose(): void;
  open: boolean;
};

const Drawer = ({ onClose, open }: DrawerProps) => {
  return (
    <MUIDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: '40%' },
      }}
    >
      <List component="nav" aria-labelledby="navigation links">
        {LINKS.map((link) => (
          <ListItemButton key={link.href}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={link.title} />
          </ListItemButton>
        ))}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
