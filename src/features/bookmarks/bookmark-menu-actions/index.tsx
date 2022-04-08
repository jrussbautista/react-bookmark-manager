import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from 'app/hooks';
import BookmarkDeleteDialog from 'features/bookmarks/bookmark-delete-dialog';

type BookmarkMenuOptions = {
  anchorEl: null | HTMLElement;
  onClose(): void;
};

function BookmarkMenuOptions({ anchorEl, onClose }: BookmarkMenuOptions) {
  const { selectedBookmark } = useAppSelector((state) => state.bookmarks);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const openDeleteDialog = () => {
    setIsOpenDeleteDialog(true);
    onClose();
  };

  const closeDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  const handleClickEdit = () => {
    if (!selectedBookmark) {
      return;
    }
    const href = `/bookmarks/${selectedBookmark.id}/edit`;
    navigate(href);
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
        <MenuItem onClick={handleClickEdit}>
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
