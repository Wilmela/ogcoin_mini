import { configureStore } from '@reduxjs/toolkit';
import { coinGeekoApi } from './services/coinGeeko';

export default configureStore({
  reducer: {
    [coinGeekoApi.reducerPath]: coinGeekoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinGeekoApi.middleware),
});
