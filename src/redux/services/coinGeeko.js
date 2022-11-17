import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://coingecko.p.rapidapi.com/coins';

export const coinGeekoAPI = createApi({
  reducerPath: 'coinGeekoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_API_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCoinByCurrency: builder.query({
      query: (currency) => `/markets?vs_currency=${currency}`,
    }),
    getCoinHistoryByDate: builder.query({
      query: (name, date) => `/${name}/history?date=${date}`,
    }),
    getCoinByName: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const {
  useGetCoinByCurrencyQuery,
  useGetCoinHistoryByDateQuery,
  useGetCoinByNameQuery,
} = coinGeekoAPI;
