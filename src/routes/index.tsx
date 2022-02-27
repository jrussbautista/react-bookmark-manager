import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import BookmarksPage from '../pages/bookmarks';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
