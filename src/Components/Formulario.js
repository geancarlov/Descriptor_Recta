import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../Context/CategoriaContext'

import { RecetasContext } from '../Context/RecetasContext'

const Formulario = () => {
    
    const [ busqueda, guardarBusqueda ] = useState({ 
        nombre: '', 
        categoria: ''
    })
    
    const { categorias } = useContext(CategoriasContext); 
    const { buscaRecetas, guardarConsultar } = useContext(RecetasContext);

    const obtenerDatosReceta = e => { 
        guardarBusqueda({ 
            ...busqueda, 
            [e.target.name]: e.target.value
        })
    }


    return ( 
        <form 
            className="col-12"
            onSubmit={ e => { 
                e.preventDefault(); 
                buscaRecetas(busqueda);
                guardarConsultar(true);
            }}
        > 
            
            <fieldset className="text-center"> 
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>
            
            <div className="row mt-4">
                
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingredietne"
                        onChange={obtenerDatosReceta}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        className="form-control"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Seleciona Categoria --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                            ))}
                    </select>
                </div>

                <div className="col md-4">
                    <input 
                        type="submit" 
                        value="Buscar Recetas" 
                        className="btn btn-block btn-primary"
                    />
                </div>

            </div>
        </form>
     );
}
 
export default Formulario;