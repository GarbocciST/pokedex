import { ContentCardPokemon } from "./ContentCardPokemon"

export const CardPokemons = ({pokemons}) => {

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


