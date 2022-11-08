
export const ContentCardPokemon = ({poke}) => {

    return (
    <>
        <div className="card" key={poke.name}>
            <div className="card-img ">
                <img className="card-img-top" src={poke.sprites.front_default} alt={poke.name} />
            </div>
            <div className=" card-body d-flex justify-content-between">
                <h5 className="card-title">{poke.name}</h5>
                {/* <p className="card-text">habilities</p> */}
                <p><small className="text-muted">#{poke.id}  </small></p>
            </div>
            <div className="card-text d-flex justify-content-between">
                <div className="card-type d-flex">
                {
                    poke.types.map( (type) => {
                        return (
                            <div className="card-type-text rounded-2" key={type.type.name}
                            >
                                {type.type.name}
                            </div>
                        )
                    })
                }
                </div>
                <div>❤️</div>
            </div>
        </div>
                    
    </>



  )
}
