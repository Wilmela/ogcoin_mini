import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://tarmex.io/api/v1';

export const tarmexAPI = createApi({
  reducerPath: 'tarmexAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    // prepareHeaders: (headers) => {
    //   headers.set('X-RapidAPI-Key', process.env.REACT_APP_API_KEY);
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    getAssets: builder.query({
      query: () => '/assets',
    }),
    getTickerInfo: builder.query({
      query: () => '/ticker',
    }),

  }),
});

export const {
  useGetAssetsQuery,
  useGetTickerInfoQuery,
} = tarmexAPI;
