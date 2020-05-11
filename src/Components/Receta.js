import React, {useContext, useState} from 'react'; 
import { ModalContext } from '../Context/ModalContext';
// importamos de material ui, solo el componente que utilizamso
import Modal from '@material-ui/core/Modal';
// importamos para hacer css en los estolos de matirial
import { makeStyles } from '@material-ui/core/styles';


// este va definir la ubicacios del modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

// este le agrega estolos 
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));




const Receta = ({receta}) => {
    
    // agragamso configuracion del mateial de ui
    // todo esta el doc 
    const [ modalStyle ] = useState(getModalStyle); 
    const [open, setOpen ] = useState(false); 
    
    // variable para utilizar las clases de estylos creada
    const classes = useStyles(); 

    const handleOpen = () => { 
        setOpen(true);
    }
    const handelClose = () => { 
        setOpen(false);
    }



    // extraeremos los id de la rcet, donde se guarda para recetearlo 
    // con el state es toda la info de alas recetas
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext); 


    // *** mostrar y dar formato a los ingreditnes
    const mostrarIngredintes = (informacion) => { 
        let ingredientes = []; 
        for(let i=0; i < 16; i++){
            // iteramos en cada atributo del objeto por como se maneja la api
            if( informacion[`strIngredient${i}`] ) {
                // si no es null lo va agregando, se puede poner li por 
                // el archivo .jsx q es como es un compoenten en react
                ingredientes.push(
                    // se pasa el props como key para q deje iterar
                    <li key={i}>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes; 
    } 


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
                            // abrimso el modal con la funcion de arriva 
                            handleOpen()
                        }}
                    >
                        Ver Recetas
                    </button>
                
                {/* esto lo q se va abrir, nuestro modal*/}
                {/* en el div le pasmos el modal estile creasdo ariva */}
                {/* seimpe le pasamos el props para abrir */}
                <Modal
                    open={open}
                    onClose={() => { 
                        // regresamos el state de id a null y al vacio
                        guardarIdReceta(null);
                        guardarReceta({})
                        handelClose();
                    }}
                > 
                    <div style={modalStyle} className={classes.paper}>
                        {/* agregamos toda la info de la receta que nos da la api  */}
                        <h2>{informacion.strDrink}</h2>
                        <h3 className="mt-4">Intrucciones</h3>
                        <p>
                            {informacion.strInstructions}
                        </p>
                        <img className="img-fluid my-4" src={informacion.strDrinkThumb} alt='s'/>
                        <h3> Ingredientes y Cantidades </h3>
                        <ul>
                            {/* esto para llamar una funcion
                            se ejecuta al momento y se pasa el parametro */}
                            { mostrarIngredintes(informacion) }
                        </ul>
                    </div>
                </Modal>



                </div>

            </div>
        </div>
     );
}


export default Receta;
