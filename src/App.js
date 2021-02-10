import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'

function App() {

  const [busquedaletra, guardarBusquedaLetra] = useState({})
  const [letra, guardarLetra] = useState('')


  useEffect(() => {

    if (Object.keys(busquedaletra).length === 0) return

    const consultarApiLetra = async () => {

      const { artista, cancion } = busquedaletra
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const resultado = await axios(url)

      guardarLetra(resultado.data.lyrics)
    }

    consultarApiLetra()
  }, [busquedaletra])

  return (
    <>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>

          </div>
          <div className='col-md-6'>
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
