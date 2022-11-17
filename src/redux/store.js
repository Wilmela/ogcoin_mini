import { configureStore } from '@reduxjs/toolkit';
import { coinGeekoAPI } from './services/coinGeeko';
import { tarmexAPI } from './services/tarmex';

export default configureStore({
  reducer: {
    [coinGeekoAPI.reducerPath]: coinGeekoAPI.reducer,
    [tarmexAPI.reducerPath]: tarmexAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(coinGeekoAPI.middleware, tarmexAPI.middleware),
});
