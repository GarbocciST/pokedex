// import {fromJS} from 'immutable';

export const loadState = (state) => {
  try {
    const serializedData = window.sessionStorage.getItem('state')
    console.log(serializedData);
    if (serializedData === null){
      return state // Si no existe el state en el local storage devolvemos state para que cargue el state inicial que hayamos definido
    }
    return JSON.parse(serializedData) // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return state // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
  }
}

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    window.sessionStorage.setItem('state', serializedData)
  } catch (error) {
	// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
  }
}