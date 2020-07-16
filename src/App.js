import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import Error from './components/Error';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

import axios from 'axios';

function App() {
  
  //Definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [bio, guardarBio] = useState({});
  const [error, guardarError] = useState(false); 
  const [cargando, guardarCargando] = useState(false);
  
  
  useEffect(()=>{

    if(Object.keys(busquedaLetra).length === 0){
        return;
      }
        const consultarAPILetra = async () => {
      
        const {artista, cancion} = busquedaLetra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
        
        try {
          const [{data: { lyrics }}, {data: {artists}}] = await Promise.all([
            axios.get(url),
            axios.get(url2)
          ]);
          guardarError(false);
          guardarCargando(false);
          guardarLetra(lyrics);
          guardarBio(artists[0]);
          guardarBusquedaLetra({});
          
        } catch (error) {
            guardarError(true);
            guardarCargando(false);
        }
        
    }
    consultarAPILetra();
    
  }, [busquedaLetra, letra, bio]);

  return (
    <Fragment>
        <Formulario
          guardarBusquedaLetra={guardarBusquedaLetra}
          guardarCargando={guardarCargando}
        />
        <div className="container mt-5">
          <div className="row">
        {cargando ? null 
        :
        error ? <Error mensaje ="Error interno, pruebe con otra canción"/> : null}
          </div>
          <div className="row">
            {cargando ? <Spinner/>
            :
            !error ? (
              
          <div className="row">
            <div className="col-md-6">
              <Info
                bio={bio}
              />

            </div>
            <div className="col-md-6">
              {letra === '' ? null : <Cancion
                letra = {letra}
              />}

            </div>

          </div>

        
            ) : null}

          </div>
          
        </div>
        <Footer/>
    </Fragment>
  );
}

export default App;
