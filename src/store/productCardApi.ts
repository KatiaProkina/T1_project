import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productCardApi = createApi({
  reducerPath: 'productCardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (build) => ({
    getProductCard: build.query({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const { useGetProductCardQuery } = productCardApi;
