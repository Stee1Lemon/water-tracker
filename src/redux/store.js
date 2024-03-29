import { configureStore } from '@reduxjs/toolkit';
import testReducer from './test/test-slice.js';

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
