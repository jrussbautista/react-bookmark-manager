import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useGetBookmarksQuery } from 'services/bookmarks';
import BookmarkCard from './BookmarkCard';

function BookmarksList() {
  const { data, isLoading, isError } = useGetBookmarksQuery();

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
        Unable to get bookmarks right now. Please try again soon.
      </Alert>
    );
  }

  return (
    <div>
      {data.data.map((bookmark) => (
        <Box sx={{ mb: 4 }} key={bookmark.id}>
          <BookmarkCard bookmark={bookmark} />
        </Box>
      ))}

      {data.data.length === 0 && (
        <Alert severity="info">No bookmarks yet.</Alert>
      )}
    </div>
  );
}

export default BookmarksList;
