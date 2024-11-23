import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from "axios";
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";


// Es el componente padre que administra el estado compartido.
// Gestiona:
// El estado del texto del input.
// La lista de Pokémon buscados.
// Proporciona las funciones necesarias a Search y pasa la lista a ListaPokemon.
// Main hace la petición a la API, obtiene los datos del Pokémon y actualiza el estado de la lista.

const Main = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    name: '',
  });
  // useEffect(() => {
  //   async function getPokemons() {
  //     // const urlPokeapi = ;
  //     try {
  //       const res = await axios.get(urlPokeapi);
  //       const respuesta = res.data;
  //       setValues(respuesta.results)
  //       setError(false);
  //     } catch (e) {
  //       setError(true);
  //     }
  //   }
  //   getPokemons();
  // }, [formValues]); //

  return (
    <main>
      <Search onSubmitForm={setDatosFormulario} />

      <Routes>
        <Route path='/' element={<ListaPokemon message={datosFormulario} />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>



    </main>
  );
};

export default Main;