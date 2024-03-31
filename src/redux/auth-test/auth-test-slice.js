import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: false,
};
export const authTestSlice = createSlice({
  name: 'authTest',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const { toggleAuth } = authTestSlice.actions;

export default authTestSlice.reducer;
