import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import bookmarksReducer from 'features/bookmarks/slice';
import { bookmarksApi } from 'features/bookmarks/api';

export const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookmarksApi.middleware),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
