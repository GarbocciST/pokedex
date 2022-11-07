import { useDispatch } from "react-redux";
import { getPokemonByName } from "../helpers";
import { useForm } from "../hooks"
import { getPokemons, getThePokemon, setPokemons } from "../store";


export const SerachBar = () => {
  
  const dispatch = useDispatch();

  const { searchText, onInputChange} = useForm({
    searchText: ""
  });

  
  
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    if ( searchText.trim() <= 1) return dispatch(getPokemons());
    
    //* este si iria
    dispatch(getThePokemon(searchText));

    
    // const pokemon = getPokemonByName(searchText);
    // dispatch(setPokemons({pokemons: pokemon, page: 0}));
    
  }
  
  return (
    
    <form onSubmit={onSearchSubmit}>
      <div className="col-4 d-inline-block">
        <input type="text" name="searchText" value={searchText} onChange={onInputChange} className=" form-control" placeholder="Buscar pokemon..." />
      </div>
      <div className="col-1 d-inline-block p-1">
        <button id="buscador" className=" btn btn-dark rounded-circle">Buscar</button>
      </div>
    </form>
    
  )
}
