import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import theme from 'theme';

type ProviderProps = {
  children: React.ReactNode;
  store: Store;
};

const MAX_SNACK = 3;

function Providers({ children, store }: ProviderProps) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={MAX_SNACK}>{children}</SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Providers;
