import { createSlice } from '@reduxjs/toolkit';

export const pokeSlice = createSlice({
    name: 'poke',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
        hasPokemon: true, 
    },
    reducers: {
        startLoadingPokemons: (state) => {
           state.isLoading = true;
        },
        
        setPokemons: (state, {payload}) => {
            state.isLoading = false;
            state.pokemons = payload.pokemons;
            state.page = payload.page;
        },
        
        findPokemon: (state, {payload}) => {
            state.hasPokemon = true;
        },
     
        notFindPokemon: (state, {payload}) => {
            state.hasPokemon = false;
        }
     
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, searchPokemon, findPokemon, notFindPokemon } = pokeSlice.actions;