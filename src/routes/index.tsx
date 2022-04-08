import React, { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes, Navigate } from 'react-router-dom';
import Layout from 'app/layout';
import Loader from 'app/loader';

const BookmarksPage = lazy(() => import('pages/bookmarks'));
const BookmarkEditPage = lazy(() => import('pages/bookmark-edit'));
const BookmarkAdd = lazy(() => import('pages/bookmark-add'));
const BookmarkDetailsPage = lazy(() => import('pages/bookmark-details'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/bookmarks" /> },
      {
        path: '/bookmarks',
        element: <BookmarksPage />,
      },
      {
        path: '/bookmarks/add',
        element: <BookmarkAdd />,
      },
      {
        path: '/bookmarks/:id',
        element: <BookmarkDetailsPage />,
      },
      {
        path: '/bookmarks/:id/edit',
        element: <BookmarkEditPage />,
      },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

const Routing = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<Loader />}> {element}</Suspense>;
};

export default Routing;
