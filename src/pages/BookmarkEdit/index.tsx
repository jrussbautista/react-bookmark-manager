import React from 'react';
import { useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import BookmarkUpdateForm from 'features/bookmarks/BookmarkUpdateForm';
import { useGetBookmarkQuery } from 'services/bookmarks';

function BookmarkEditPage() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data } = useGetBookmarkQuery(id as string);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Alert severity="error">
        Unable to get bookmark right now. Please try again soon.
      </Alert>
    );
  }

  const bookmarkFields = {
    title: data.title,
    description: data.description,
    link: data.link,
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Update Bookmark
      </Typography>
      <BookmarkUpdateForm id={data.id} bookmarkFields={bookmarkFields} />
    </>
  );
}

export default BookmarkEditPage;
