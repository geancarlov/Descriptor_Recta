import React from 'react';
import { Fragment } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListaRecetas from './Components/ListaRecetas'; 


// los context en sima del padre
import CategoriasProvider from './Context/CategoriaContext';
import RecetasProvider from './Context/RecetasContext'; 
import ModalProvider from './Context/RecetasContext';
// el orden no importa que context va primero con tal que sea padres

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          <Fragment>
            
            <Header /> 
            
            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>

              <ListaRecetas /> 
            </div>

          </Fragment>
        
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
    );
}

export default App;
