import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/home';
import BookmarksPage from 'pages/bookmarks';
import BookmarkEditPage from 'pages/bookmark-edit';
import BookmarkAdd from 'pages/bookmark-add';
import BookmarkDetailsPage from 'pages/bookmark-details';
import Layout from 'app/Layout';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
        <Route path="bookmarks/add" element={<BookmarkAdd />} />
        <Route path="bookmarks/:id" element={<BookmarkDetailsPage />} />
        <Route path="bookmarks/:id/edit" element={<BookmarkEditPage />} />
        <Route path="*" element={<Navigate to="." />} />
      </Route>
    </Routes>
  );
};

export default Routing;
