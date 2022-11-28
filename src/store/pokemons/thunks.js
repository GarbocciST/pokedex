import axios from "axios";
import { pokemonApi } from "../../api/pokemonApi";
import { findPokemon, notFindPokemon, setPokemons, startLoadingPokemons } from "./pokeSlice";


export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {

        try {
            dispatch(startLoadingPokemons());
    
            const {data} = await pokemonApi.get(`pokemon?limit=12&offset=${page * 10}`);
            // console.log(data.results);
    
            
            const pokes = data.results;
            
            const promesas = pokes.map( async (poke) => {
                return await axios.get(poke.url);
                

            });

            const results = await Promise.all(promesas)
            
            const idx = results.map( index => ({
                id: index.data.id,
                name: index.data.name,
                sprites: index.data.sprites,
                types: index.data.types,
            }));
            

            dispatch(setPokemons({ pokemons: idx, page: page }));
            
            dispatch(findPokemon());
        
            

        } catch (error) {
            console.log(error);
            throw new Error ('No se puede cargar los pokemons');
        }

    }

}


export const getThePokemon = (poke) => {
    return async(dispatch, getState) => {

        try {
            dispatch(startLoadingPokemons());
    
            const {data} = await pokemonApi.get(`pokemon/${poke}/`);
            // console.log(data.results);

            dispatch(setPokemons({ pokemons: [data], page: 0 }));
            
            dispatch(findPokemon());
        
            

        } catch (error) {
            dispatch(notFindPokemon());
            console.log(error);
            throw new Error ('No se puede cargar los pokemons');
        }

    }

}