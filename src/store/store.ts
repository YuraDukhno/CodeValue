import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import { localStorageMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
