import React from 'react';
import Typography from '@mui/material/Typography';
import BookmarkAddForm from 'features/bookmarks/BookmarkAddForm';

function BookmarkAdd() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Add Bookmark
      </Typography>
      <BookmarkAddForm />;
    </>
  );
}

export default BookmarkAdd;
