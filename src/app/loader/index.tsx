import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@mui/system/styled';

const AppLoaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

function Loader() {
  return (
    <AppLoaderContainer>
      <CircularProgress />
    </AppLoaderContainer>
  );
}

export default Loader;
