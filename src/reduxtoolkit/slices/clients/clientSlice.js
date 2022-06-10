import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clients: [],
  active: null,
};

export const clientSlice = createSlice({
  name: 'lients',
  initialState: initialState,
  reducers: {
    startNewClient: (state, action) => {
      // state.darkMode = action.payload;
      // localStorage.setItem('dark', JSON.stringify(action.payload));
      state.clients = action.payload;
    },
    activeClient: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { startNewClient, activeClient } = clientSlice.actions;
