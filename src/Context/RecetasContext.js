import React, { createContext, useState, useEffect } from 'react'; 
import axios from 'axios'; 

export const RecetasContext = createContext(); 


const RecetasProvider = (props) => { 
    
    const [recetas, guardarRecetas] = useState([]) ;

    const [busqueda, buscaRecetas ] = useState({ 
        nombre: '', 
        categoria: ''
    });

    const [consultar, guardarConsultar ] = useState(false);

    const {nombre, categoria } = busqueda; 

    useEffect(() => {

        if(consultar) {
            
            const obtnerRecetas = async () => { 
            
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await axios.get(url); 
                guardarRecetas(resultado.data.drinks); 

            }
            
            obtnerRecetas();
        }

    }, [busqueda])


    return ( 
        <RecetasContext.Provider

            value={{
                recetas,
                buscaRecetas,
                guardarConsultar
            }}
        > 
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider; 
