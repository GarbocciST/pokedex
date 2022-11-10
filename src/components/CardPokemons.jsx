import { ContentCardPokemon } from "./ContentCardPokemon"

export const CardPokemons = ({pokemons}) => {
    // console.log(poke.sprites.other)
    // console.log(poke.sprites.other.official-artwork.front_default);
    
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


