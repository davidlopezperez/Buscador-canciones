import React, {useState} from 'react';

const Formulario = ({guardarBusquedaLetra, guardarCargando}) => {
    
    //State de la busqueda por artista y canción
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    //State para mostrar un mensaje de error en caso de que los campos esten vacios
    const [error, guardarError] = useState(false);
    
    //Extraer artista y cancion 

    const {artista, cancion} = busqueda;
    
    //Funcion a cada input para leer su contenido

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
            
        });
        
    }

    const buscarInformacion = e => {
        e.preventDefault();
        
        //Validamos

        if(artista.trim() === '' || cancion.trim()===''){
            guardarCargando(false);
            guardarError(true);
            return;
        }  
            guardarError(false);
            guardarCargando(true);
            guardarBusquedaLetra(busqueda);
        }

     
    
    return ( 

        <div className="bg-info"> 
            <div className="container">
            
                <div className="row">
                    
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 mb-2"
                        onSubmit={buscarInformacion}
                        
                        
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                                <label>Artista</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="artista"
                                                    placeholder="Nombre Artista"
                                                    onChange={actualizarState}
                                                    value={artista}
                                                >

                                                </input>
                                        </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Canción</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre Canción"
                                                onChange={actualizarState}
                                                value={cancion}
                                                >

                                            </input>
                                        </div>
                                </div>

                            </div>
                            
                                <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary float-right"
                                >Buscar</button>
                                </div>
                            
                            
                        </fieldset>
                        {error ? <p className="alert alert-danger text-center p-2 mt-2">Los campos son obligatorios</p> : null}
                    </form>
                    

                </div>

            </div>

        </div>
     );
}
 
export default Formulario;