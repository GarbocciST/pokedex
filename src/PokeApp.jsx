import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardPokemons, SerachBar } from './components';
import { getPokemons } from './store/pokemons';

export const PokeApp = () => {

    const { isLoading, page } = useSelector( state => state.pokemons);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch( getPokemons() );
    }, []); 
  

    // const pokeCargado = (pokemons.length >= 1)

    // useEffect(() => {
    //     dispatch( getIndexPokemons());
    // }, [pokeCargado]);
    
    // useEffect(() => {
    //     dispatch( getIndexPokemons());

    // }, [pokemons])
    
    
    return (
        <>
            <h1>Pokedex</h1>
            <SerachBar />
            <button onClick={ () => dispatch(getPokemons(page - 1))} className="btn btn-primary m-1" disabled={isLoading}>{"<"}</button>
            <p className="d-inline-flex"> {page}/125 </p>
            <button onClick={ () => dispatch(getPokemons(page + 1))} className="btn btn-primary" disabled={isLoading}>{">"}</button>
            <hr />

            {
                (isLoading === true) 
                ?
                <span className="alert alert-danger form-control">cargando...</span>  
                :      
                <CardPokemons />
                
            }

        </>
    )
}
