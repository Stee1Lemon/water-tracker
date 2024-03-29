import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 'test value',
  },
  reducers: {
    newTestValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { newTestValue } = testSlice.actions;

export default testSlice.reducer;
