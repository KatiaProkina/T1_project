import { configureStore } from '@reduxjs/toolkit';
import { filterApi } from './filterApi';
import { productsApi } from './productsApi';
import { productCardApi } from './productCardApi';

export const store = configureStore({
  reducer: {
    [filterApi.reducerPath]: filterApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productCardApi.reducerPath]: productCardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      filterApi.middleware,
      productsApi.middleware,
      productCardApi.middleware
    ),
});
