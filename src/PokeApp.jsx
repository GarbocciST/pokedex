import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardPokemons, SerachBar } from './components';
import { getPokemons } from './store';

export const PokeApp = () => {

    const { isLoading, page, isSearch } = useSelector( state => state.pokemons);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch( getPokemons() );
    }, []); 
    
    //* Componente extra (contentCardPokemons) y en el 
    //* effect haga llamado al dispatch y tenga esa llamada exclusivamente a la imagen


    return (
        <>
            <h1>Pokedex</h1>
            <SerachBar />
            <button onClick={ () => dispatch(getPokemons(page - 1))} className="btn btn-primary m-1" disabled={isLoading}>{"<"}</button>
            <p className="d-inline-flex"> {page}/116 </p>
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
