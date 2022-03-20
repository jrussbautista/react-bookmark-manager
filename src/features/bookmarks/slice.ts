import { createSlice } from '@reduxjs/toolkit';

export interface BookmarksState {
  value: number;
}

const initialState: BookmarksState = {
  value: 0,
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {},
});

export default bookmarksSlice.reducer;
