import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import bookmarksReducer from 'features/bookmarks/bookmarksSlice';
import { bookmarksApi } from 'services/bookmarks';

export const reducer = {
  bookmarks: bookmarksReducer,
  [bookmarksApi.reducerPath]: bookmarksApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookmarksApi.middleware),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
