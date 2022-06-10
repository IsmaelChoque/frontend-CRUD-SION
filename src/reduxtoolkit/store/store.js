import { configureStore } from '@reduxjs/toolkit';
import { clientSlice } from '../slices/clients/clientSlice';
import { darkSlice } from '../slices/dark/darkSlice';

export const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    clients: clientSlice.reducer,
  },
});
