import React from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import styled from '@mui/system/styled';
import { useAddBookmarkMutation } from 'services/bookmarks';
import { BookmarkFields } from 'types';

const StyledFormGroup = styled(FormGroup)({
  marginBottom: 20,
});

const ButtonActionContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 2,
});

function BookmarkAddForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookmarkFields>();

  const [addBookmark, { isLoading }] = useAddBookmarkMutation();

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (fields: BookmarkFields) => {
    try {
      const { id } = await addBookmark(fields).unwrap();
      const url = `/bookmarks/${id}`;
      enqueueSnackbar('Bookmark is successfully added.', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        variant: 'success',
      });
      navigate(url);
    } catch (err) {
      enqueueSnackbar(
        `We could'nt add your bookmark right now. Please try again soon.`,
        {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          variant: 'error',
        }
      );
    }
  };

  const handleCancel = () => {
    navigate('/bookmarks');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          {...register('title', { required: 'Title is required field.' })}
          error={Boolean(errors.title)}
          helperText={errors.title && errors.title.message}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          multiline
          maxRows={4}
          {...register('description', {
            required: 'Description is required field.',
          })}
          error={Boolean(errors.description)}
          helperText={errors.description && errors.description.message}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <TextField
          id="link"
          label="Link"
          variant="outlined"
          {...register('link', {
            required: 'Link is required field.',
          })}
          error={Boolean(errors.link)}
          helperText={errors.link && errors.link.message}
        />
      </StyledFormGroup>
      <ButtonActionContainer>
        <Button sx={{ mr: 2 }} onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={isLoading}
        >
          Save
        </Button>
      </ButtonActionContainer>
    </form>
  );
}

export default BookmarkAddForm;
