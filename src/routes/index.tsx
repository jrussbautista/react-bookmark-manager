import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import BookmarksPage from '../pages/bookmarks';
import Layout from 'app/Layout';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="*" element={<Navigate to="." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
