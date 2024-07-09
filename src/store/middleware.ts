import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';

export const localStorageMiddleware: Middleware = ({ getState }) => next => action => {
  const result = next(action);
  const state: RootState = getState();
  localStorage.setItem('products', JSON.stringify(state.products.products));
  return result;
};
