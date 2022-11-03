

export const SerachBar = () => {
  
  
  
  return (
    <div className="p-1">
        <div className="col-4 d-inline-block">
          <input type="text" className=" form-control" placeholder="Buscar pokemon..." />
        </div>
        <div className="col-1 d-inline-block p-1">
          <button id="buscador" className=" btn btn-dark rounded-circle">Q</button>
        </div>
    </div>
  )
}
