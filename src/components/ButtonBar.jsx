import { useDispatch } from "react-redux"
import { getPokemons } from "../store"


export const ButtonBar = ({page}, {isLoading}) => {
 
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between">
        <div className=" m-2">
            <button onClick={ () => dispatch(getPokemons(page - 1))} className="btn btn-secondary m-1 rounded-circle" disabled={isLoading || page < 1}>{"<"}</button>
            <p className="d-inline-flex"> {page}/97 </p>
            <button onClick={ () => dispatch(getPokemons(page + 1))} className="btn btn-secondary rounded-circle" disabled={isLoading || page > 38}>{">"}</button>
        </div>
        <div className="button-back">
           <button onClick={ () => dispatch(getPokemons(page))} className="btn btn-dark" disabled={isLoading}>Regresar</button>
        </div>
    </div>
  )
}
