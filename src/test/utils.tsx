import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import Providers from 'providers';
import { reducer } from 'app/store';

type WrapperProps = {
  children: React.ReactNode;
};

export const render = (
  ui: React.ReactElement,
  {
    route = '/',
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  }: Record<string, any> = {}
) => {
  window.history.pushState({}, 'Test page', route);

  const Wrapper = ({ children }: WrapperProps) => {
    return <Providers store={store}>{children}</Providers>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { userEvent, rtlRender };
