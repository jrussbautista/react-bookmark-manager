import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { truncate } from 'utils/index';
import { Bookmark } from '../types';

type BookmarkCardProps = {
  bookmark: Bookmark;
};

const MAX_DESCRIPTION_LEN = 100;

function BookmarkCard({ bookmark }: BookmarkCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {bookmark.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {truncate(bookmark.description, MAX_DESCRIPTION_LEN)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={bookmark.link}
          target="_blank"
          size="small"
          variant="contained"
          disableElevation
          sx={{ mr: 1 }}
        >
          Visit Link
        </Button>
        <Button size="small" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookmarkCard;
