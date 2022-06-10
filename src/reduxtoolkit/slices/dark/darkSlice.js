import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: JSON.parse(localStorage.getItem('dark')) ? true : false, // window.matchMedia('(prefers-color-scheme: dark)').matches,
};

export const darkSlice = createSlice({
  name: 'dark',
  initialState: initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('dark', JSON.stringify(action.payload));
    },
  },
});

export const { setDarkMode } = darkSlice.actions;

// export default darkSlice.reducer;
