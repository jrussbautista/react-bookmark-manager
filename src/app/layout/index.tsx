import React from 'react';
import Navbar from 'app/navbar';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ p: 2 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
