import React, { createContext, useEffect, useState} from 'react'; 
import axios from 'axios'; 

// creamos el context
export const ModalContext = createContext(); 

const ModalProvider = (props) => { 

// sate del provider, para sacar el api de cada click
const [ idreceta, guardarIdReceta ] = useState(null); 
// tnemso algunos para receta 
const [ informacion, guardarReceta ] = useState({})


// que tengasmos la receta, llamamos el api 
useEffect(() => { 
    // funcion para llamar al api 
    const obtnerReceta = async () => { 
        // si no hay no salismos del efefct 
        if(!idreceta) return;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
        
        const resultado = await axios.get(url); 
        
        // guradamso el resultado
        guardarReceta(resultado.data.drinks[0]);

    }
    obtnerReceta(); 
},[idreceta])

return ( 
    <ModalContext.Provider
        value={{
            informacion,
            guardarIdReceta,
            guardarReceta
        }}
    >
    
        {props.children}
    
    </ModalContext.Provider>
)
}

export default ModalProvider; 