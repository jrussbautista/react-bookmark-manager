import { createSlice } from '@reduxjs/toolkit';
import { Bookmark } from './types';

export type BookmarksState = {
  items: Bookmark[];
};

const initialState: BookmarksState = {
  items: [],
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {},
});

export default bookmarksSlice.reducer;
