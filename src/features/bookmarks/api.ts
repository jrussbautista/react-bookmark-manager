import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Bookmark } from './types';

export const bookmarksApi = createApi({
  reducerPath: 'bookmarksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bookmark.app/' }),
  endpoints: (builder) => ({
    getBookmarks: builder.query<{ data: Bookmark[] }, void>({
      query: () => 'bookmarks',
    }),
  }),
});

export const { useGetBookmarksQuery } = bookmarksApi;
