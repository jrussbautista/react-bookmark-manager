import React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LINKS } from 'constants/app';
import styled from '@mui/system/styled';

const CloseButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

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
      <CloseButtonContainer>
        <IconButton aria-label="close menu" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </CloseButtonContainer>
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
