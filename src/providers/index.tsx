import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import theme from 'theme';

type ProviderProps = {
  children: React.ReactNode;
  store: Store;
};

function Providers({ children, store }: ProviderProps) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Providers;
