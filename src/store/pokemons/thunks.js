import axios from "axios";
import { pokemonApi } from "../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokeSlice";


export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {

        try {
            dispatch(startLoadingPokemons());
    
            const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
            // console.log(data.results);
    
            
            const pokes = data.results;
            
            const promesas = pokes.map( async (poke) => {
                return await axios.get(poke.url);
                

            });

            const results = await Promise.all(promesas)
            
            const idx = results.map( index => {
                return index.data
                
            });

            setTimeout(() => {
                dispatch(setPokemons({ pokemons: idx, page: page }));
            }, 200);
            

        } catch (error) {
            console.log(error);
            throw new Error ('No se puede cargar los pokemons');
        }

    }

}






