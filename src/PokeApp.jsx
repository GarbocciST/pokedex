import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonBar, CardPokemons, SerachBar } from './components';
import { getPokemons } from './store';


export const PokeApp = () => {

    const { isLoading, page, pokemons, hasPokemon } = useSelector( state => state.pokemons);
    const dispatch = useDispatch();

    //* Grabar en localStorage
    // const savePagePokemons = () => {
    //     localStorage.setItem('pokes', JSON.stringify(pokemons));
       
    // }
    
    // const loadPagePokemons = () => {
     
    //   const load =  localStorage.getItem('pokes',pokemons);
    //     console.log(load);
    //    return load
    // }


    useEffect(() => {
        dispatch( getPokemons() );
    }, []); 
   
    // useEffect(() => {
    //     savePagePokemons();
    // }, [page]); 
   
    // useEffect(() => {
    //     loadPagePokemons();
    // }, []); 


    
    //* Componente extra (contentCardPokemons) y en el 
    //* effect haga llamado al dispatch y tenga esa llamada exclusivamente a la imagen


    return (
        <>
            <h1>Pokedex</h1>
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
