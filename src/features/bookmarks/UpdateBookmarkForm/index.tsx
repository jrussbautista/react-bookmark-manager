import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import styled from '@mui/system/styled';
import { useUpdateBookmarkMutation } from '../api';

const StyledFormGroup = styled(FormGroup)({
  marginBottom: 20,
});

const ButtonActionContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 2,
});

type BookmarkFields = {
  title: string;
  description: string;
  link: string;
};

type UpdateBookmarkFormProps = {
  bookmarkFields: BookmarkFields;
  id: string;
};

function UpdateBookmarkForm({ bookmarkFields, id }: UpdateBookmarkFormProps) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookmarkFields>();

  useEffect(() => {
    setValue('title', bookmarkFields.title);
    setValue('description', bookmarkFields.description);
    setValue('link', bookmarkFields.link);
  }, [bookmarkFields, setValue]);

  const [updateBookmark, { isLoading }] = useUpdateBookmarkMutation();

  const onSubmit = async (fields: BookmarkFields) => {
    try {
      await updateBookmark({ id, ...fields }).unwrap();
      navigate('/bookmarks');
    } catch (err) {
      console.log(err);
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

export default UpdateBookmarkForm;
