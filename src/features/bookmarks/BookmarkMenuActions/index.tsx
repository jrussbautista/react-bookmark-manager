import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkDeleteDialog from './../BookmarkDeleteDialog/index';

type BookmarkMenuOptions = {
  anchorEl: null | HTMLElement;
  onClose(): void;
};

function BookmarkMenuOptions({ anchorEl, onClose }: BookmarkMenuOptions) {
  const open = Boolean(anchorEl);

  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const openDeleteDialog = () => {
    setIsOpenDeleteDialog(true);
    onClose();
  };

  const closeDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  return (
    <>
      <Menu
        id="bookmark menu options"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'bookmark menu options',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={onClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={openDeleteDialog}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
      <BookmarkDeleteDialog
        open={isOpenDeleteDialog}
        onClose={closeDeleteDialog}
      />
    </>
  );
}

export default BookmarkMenuOptions;
