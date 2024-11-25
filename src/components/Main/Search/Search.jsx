import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ onSubmitForm }) => {
  // Estado del Search
  const [formValues, setValues] = useState({ name: '' });

  const [pokemonName, setPokemonName] = useState(''); // Disparador

  const [error, setError] = useState(false);


// // FETCH INICIAL para mostrar todos los pokemons al abrir, no funciona de momento
// useEffect(() => {
//   const getPokemons = async () => {
//     try {
//       const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
//       setPokemonName(resp.data.results)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   getPokemons();
// }, []);

  useEffect(() => {
    async function getPokemons() {
      if (pokemonName) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
          // `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
          console.log(response)
        const pokemonData = response.data;

        // Llama a la función "onSubmitForm" de Main con los datos del Pokémon
        onSubmitForm(pokemonData);
        setError(false);
      } catch (e) {
        setError(true);
      }
    }
  }
    getPokemons();

  }, [pokemonName]);



  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...formValues,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonName = formValues.name.trim();
    if (pokemonName) {
      setPokemonName(pokemonName);
      setValues({ name: '' });
    } else {
      alert("Inserta el nombre o número de un pokemon");
    }
  };


  return (
    <>
      <div className='searchContainer'>
        <h1 className='h1search'>Hazte con todos</h1>
        <form className="data" onSubmit={handleSubmit}>
          <input className='inputSearch'
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Nombre o número"
          />
          <button type="submit">Buscar Pokémon</button>
        </form>
      </div>
    </>
  );
};

export default Search;
