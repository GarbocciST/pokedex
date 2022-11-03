import { configureStore } from "@reduxjs/toolkit";


import { pokeSlice } from "./pokemons";


export const store = configureStore({
    reducer: {
        pokemons: pokeSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})