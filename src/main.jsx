import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';


import { PokeApp } from './PokeApp';
import { store } from './store';


import './styles.css'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <PokeApp />   
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
