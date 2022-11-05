import { useSelector } from "react-redux";

export const getPokemonByName = ( name = '') => {
    
    const {pokemons} = useSelector(state => state.pokemons)
    name = name.trim();

    if (name.length === 0) return;

    return pokemons.filter( poke => poke.name.includes(name));

}
