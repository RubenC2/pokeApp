import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";


const Main = () => {
  const [pokemons, setPokemons] = useState([]); // Estado para guardar la lista de Pokémon encontrados


  const handleSearch = (pokemonData) => {
    setPokemons(pokemonData)
  };

  return (
    <div>
      <main>
        <Search onSubmitForm={handleSearch} />
        {pokemons.length > 0 && <ListaPokemon pokemons={pokemons} />}
        {/* <Routes>
          {/* <Route path='/' element={<ListaPokemon pokemons={pokemons} />} /> */}
          {/* <Route path='/*' element={<Navigate to='/' />} />
        </Routes>  */}
      </main>
    </div>
  );
};

export default Main;

