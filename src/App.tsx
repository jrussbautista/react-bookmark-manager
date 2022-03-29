import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Routing from 'routes';
import Providers from 'providers';
import { store } from './app/store';

const App = () => {
  return (
    <Providers store={store}>
      <CssBaseline />
      <Routing />
    </Providers>
  );
};

export default App;
