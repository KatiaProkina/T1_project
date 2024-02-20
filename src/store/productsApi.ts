import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: (limit) => `products?limit=${limit}`,
    }),
    getCategoryProducts: build.query({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoryProductsQuery } = productsApi;
