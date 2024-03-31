import { configureStore } from '@reduxjs/toolkit';
import authTestReducer from './auth-test/auth-test-slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const testPersistConfig = {
  key: 'authTest',
  storage,
};

export const store = configureStore({
  reducer: {
    authTest: persistReducer(testPersistConfig, authTestReducer),
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
