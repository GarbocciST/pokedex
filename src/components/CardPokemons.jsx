import { useSelector } from "react-redux"


export const CardPokemons = () => {

    const {pokemons} = useSelector(state => state.pokemons);

    return (
        <>
            
            {
                pokemons.map( (poke) => (
                    <div className="card" key={poke.name}>
                        <div className="card-img">
                            <img className="card-img-top" src={poke.sprites.front_default} alt={pokemons.name} />
                        </div>
                        <div className=" card-body">
                            <h5 className="card-title">{poke.name}</h5>
                            {/* <p className="card-text">habilities</p> */}
                            <p className="card-text"><small className="text-muted">id {poke.id}  </small></p>
                        </div>
                        <div>
                            <div>
                            {
                                poke.types.map( (type) => {
                                return (
                                    <div key={type.type.name}>{type.type.name}</div>
                                )
                             })
                            }
                            </div>
                            <div>❤️</div>
                        </div>
                    </div>
                    
                ))
            }
            
        </>
    )
}


