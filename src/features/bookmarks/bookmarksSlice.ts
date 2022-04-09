import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bookmark } from 'types';

export type BookmarksState = {
  items: Bookmark[];
  selectedBookmark: Bookmark | null;
};

const initialState: BookmarksState = {
  items: [],
  selectedBookmark: null,
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    selectBookmark(state, action: PayloadAction<Bookmark>) {
      state.selectedBookmark = action.payload;
    },
  },
});

export const { selectBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
