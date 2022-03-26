import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Bookmark } from './types';

export const bookmarksApi = createApi({
  reducerPath: 'bookmarksApi',
  tagTypes: ['Bookmark'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bookmark.app/' }),
  endpoints: (builder) => ({
    getBookmarks: builder.query<{ data: Bookmark[] }, void>({
      query: () => 'bookmarks',
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: 'Bookmark' as const,
                id,
              })),
              { type: 'Bookmark', id: 'LIST' },
            ]
          : [{ type: 'Bookmark', id: 'LIST' }],
    }),
    addBookmark: builder.mutation<Bookmark, Partial<Bookmark>>({
      query: (body) => ({
        url: `bookmarks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Bookmark', id: 'LIST' }],
    }),
    deleteBookmark: builder.mutation<{ id: string }, string>({
      query(id) {
        return {
          url: `bookmarks/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Bookmark', id }],
    }),
  }),
});

export const {
  useGetBookmarksQuery,
  useDeleteBookmarkMutation,
  useAddBookmarkMutation,
} = bookmarksApi;
