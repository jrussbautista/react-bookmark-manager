import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import BookmarksPage from '../pages/bookmarks';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
