import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tokenReducer from './Slices/TokenSlice';

const persistConfig = {
  key: 'redux_data',
  storage,
};

const rootReducer = combineReducers({
    token:tokenReducer
});

const persistedUserDetailReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:  persistedUserDetailReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);