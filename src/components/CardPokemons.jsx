import { useSelector } from "react-redux"
import { ContentCardPokemon } from "./";


export const CardPokemons = () => {

    const {pokemons} = useSelector(state => state.pokemons);

    return (
        <>
            
            {

                pokemons.map( (poke) => (
                    <ContentCardPokemon key={poke.name} poke={poke}/>
                ))
            }
            
        </>
    )
}


