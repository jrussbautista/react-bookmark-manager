import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteBookmarkMutation } from '../api';
import { useAppSelector } from 'app/hooks';

type BookmarkDeleteDialogProps = {
  open: boolean;
  onClose(): void;
};

function BookmarkDeleteDialog({ open, onClose }: BookmarkDeleteDialogProps) {
  const [deleteBookmark, { isLoading }] = useDeleteBookmarkMutation();

  const { selectedBookmark } = useAppSelector((state) => state.bookmarks);

  const handleProceed = async () => {
    if (!selectedBookmark) {
      return;
    }
    try {
      await deleteBookmark(selectedBookmark.id);
      onClose();
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete this bookmark?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deleting this bookmark will gone for good.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button autoFocus disabled={isLoading} onClick={handleProceed}>
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookmarkDeleteDialog;
