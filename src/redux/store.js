import { configureStore } from '@reduxjs/toolkit';
import testReducer from './test/test-slice.js';
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

const testPersistConfig = {
  key: 'test',
  storage,
};

const PersistConfig = {
  key: 'root',
  storage,
}

export const store = configureStore({
  reducer: {
    root: rootReducer,
    test: persistReducer(testPersistConfig, testReducer),
    auth: persistReducer((PersistConfig, authReducer),)
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
