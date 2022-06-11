import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clients: [],
  clientActive: null,
  isLoading: false,
};

export const clientSlice = createSlice({
  name: 'lients',
  initialState: initialState,
  reducers: {
    loadingClients: (state) => {
      state.isLoading = true;
    },
    startNewClient: (state, action) => {
      // state.darkMode = action.payload;
      // localStorage.setItem('dark', JSON.stringify(action.payload));
      state.clients = action.payload;
    },
    setClients: (state, action) => {
      state.isLoading = false;
      state.clients = action.payload;
    },
    activeClient: (state, action) => {
      state.clientActive = action.payload;
    },
  },
});

export const { loadingClients, startNewClient, setClients, activeClient } =
  clientSlice.actions;
