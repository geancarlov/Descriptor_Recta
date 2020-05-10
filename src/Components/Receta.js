import React, {useContext} from 'react'; 
import { ModalContext } from '../Context/ModalContext';

const Receta = ({receta}) => {
    
    // extraeremos modoal i recetas 
    const { guardarIdReceta } = useContext(ModalContext); 

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">  
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="card-img-top"/>
                
                <div className="card-body">
                    <button 
                        type="button"
                        className="btn btn-block btn-primary"
                        // le pasmos el id
                        onClick={() => { 
                            guardarIdReceta(receta.idDrink);
                        }}
                    >
                        Ver Recetas
                    </button>
                </div>

            </div>
        </div>
     );
}


export default Receta;