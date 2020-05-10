import React, { createContext, useEffect, useState} from 'react'; 
import axios from 'axios'; 

export const ModalContext = createContext(); 

const ModalProvider = (props) => { 
    
    // sate del provider 
    const [ idreceta, guardarIdReceta ] = useState(null); 

    
    return ( 
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
        
            {props.children}
        
        </ModalContext.Provider>
    )
}

export default ModalProvider; 