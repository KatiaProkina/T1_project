import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/products/',
  }),
  endpoints: (build) => ({
    getFilters: build.query({
      query: () => `categories`,
    }),
  }),
});

export const { useGetFiltersQuery } = filterApi;
