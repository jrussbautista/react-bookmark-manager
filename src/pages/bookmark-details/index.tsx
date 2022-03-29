import React from 'react';
import { useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useGetBookmarkQuery } from 'features/bookmarks/api';

function BookmarkDetailsPage() {
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

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
            {data.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href={data.link}
            target="_blank"
            size="small"
            variant="contained"
            disableElevation
            sx={{ mr: 1 }}
          >
            Visit Link
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default BookmarkDetailsPage;
