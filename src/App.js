import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Formulario from './components/Formulario'

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
    </>
  );
}

export default App;
