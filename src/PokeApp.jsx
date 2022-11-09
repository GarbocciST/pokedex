import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonBar, CardPokemons, HeaderBar, SerachBar } from './components';
import { getPokemons } from './store';


export const PokeApp = () => {

    const { isLoading, page, pokemons, hasPokemon } = useSelector( state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    }, []); 
    
    
    //! Deberian aparecer 12 pokemones, no 10, pero hasta que no resuelva el problema de memoria seran 10 pokes
    
    
    //* Grabar en localStorage
   
    

    //* Componente extra (contentCardPokemons) y en el 
    //* effect haga llamado al dispatch y tenga esa llamada exclusivamente a la imagen


    return (
        <>  
            
            <HeaderBar />
            <SerachBar />
            <ButtonBar page={page} isLoading={isLoading}/>
            <hr />

            {   
                (hasPokemon === false) ?
                <span className="alert alert-warning form-control">Pokemon no encontrado</span>
                :
                    (isLoading === true) ?
                    <span className="alert alert-danger form-control">cargando...</span>  
                    :      
                    <CardPokemons pokemons={pokemons} />
                
            }

        </>
    )
}
