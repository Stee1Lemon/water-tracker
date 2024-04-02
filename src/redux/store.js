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
import { rootReducer } from './root/rootSlice.js';
import { authReducer } from './auth/authSlice.js';
import { waterReducer } from './water/waterSlice.js';

const testPersistConfig = {
  key: 'authTest',
  storage,
};

const PersistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: persistReducer(PersistConfig, authReducer),
    waterData: persistReducer(PersistConfig, waterReducer),
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
