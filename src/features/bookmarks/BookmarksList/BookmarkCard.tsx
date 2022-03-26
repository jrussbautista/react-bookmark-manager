import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@mui/system/styled';
import { truncate } from 'utils';
import { useAppDispatch } from 'app/hooks';
import { Bookmark } from '../types';
import BookmarkMenuOptions from '../BookmarkMenuActions';
import { selectBookmark } from '../slice';

type BookmarkCardProps = {
  bookmark: Bookmark;
};

const TopContainer = styled('div')({
  display: 'flex',
});

const MAX_DESCRIPTION_LEN = 100;

function BookmarkCard({ bookmark }: BookmarkCardProps) {
  const dispatch = useAppDispatch();

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenuOptions = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setMenuAnchorEl(event.currentTarget);
    dispatch(selectBookmark(bookmark));
  };

  const handleCloseMenuOptions = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Card>
        <CardContent>
          <TopContainer>
            <Typography variant="h5" gutterBottom sx={{ flex: 1 }}>
              {bookmark.title}
            </Typography>
            <IconButton onClick={handleOpenMenuOptions}>
              <MoreVertIcon />
            </IconButton>
          </TopContainer>
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
      <BookmarkMenuOptions
        anchorEl={menuAnchorEl}
        onClose={handleCloseMenuOptions}
      />
    </>
  );
}

export default BookmarkCard;
