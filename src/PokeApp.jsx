import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardPokemons, SerachBar } from './components';
import { getPokemons } from './store';

export const PokeApp = () => {

    const { isLoading, page, pokemons } = useSelector( state => state.pokemons);
    const dispatch = useDispatch();

    //* Grabar en localStorage
    const savePagePokemons = () => {
        localStorage.setItem('pokes', JSON.stringify(pokemons));
       
    }
    
    // const loadPagePokemons = () => {
     
    //   const load =  localStorage.getItem('pokes',pokemons);
    //     console.log(load);
    //    return load
    // }


    useEffect(() => {
        dispatch( getPokemons() );
    }, []); 
   
    useEffect(() => {
        savePagePokemons();
    }, [page]); 
   
    // useEffect(() => {
    //     loadPagePokemons();
    // }, []); 


    
    //* Componente extra (contentCardPokemons) y en el 
    //* effect haga llamado al dispatch y tenga esa llamada exclusivamente a la imagen


    return (
        <>
            <h1>Pokedex</h1>
            <SerachBar />
            <button onClick={ () => dispatch(getPokemons(page - 1))} className="btn btn-primary m-1 rounded-circle" disabled={isLoading}>{"<"}</button>
            <p className="d-inline-flex"> {page}/116 </p>
            <button onClick={ () => dispatch(getPokemons(page + 1))} className="btn btn-primary rounded-circle" disabled={isLoading}>{">"}</button>
            <hr />

            {
                (isLoading === true) 
                ?
                <span className="alert alert-danger form-control">cargando...</span>  
                :      
                <CardPokemons pokemons={pokemons} />
                
            }

        </>
    )
}
