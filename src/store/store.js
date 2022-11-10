import { configureStore } from '@reduxjs/toolkit';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'

import { pokeSlice } from './pokemons';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

//   const reducer = combineReducers({
//     pokemons : pokeSlice.reducer
//   })
  const actionSanitizer = (action) => (
    action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data ?
    { ...action, data: '<<LONG_BLOB>>' } : action
  );
  
  const persistedReducer = persistReducer(persistConfig, pokeSlice.reducer)

export const store = configureStore({
    reducer: {
        pokemons: persistedReducer
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
    
    devTools: {
      actionSanitizer,
      stateSanitizer: (state) => state.data ? {...state, data: '<<LONG_BLOB>>'} : state
    }

});