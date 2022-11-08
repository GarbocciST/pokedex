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
  
  
  const persistedReducer = persistReducer(persistConfig, pokeSlice.reducer)

export const store = configureStore({
    reducer: {
        pokemons: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })

});