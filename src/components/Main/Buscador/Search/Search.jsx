import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

const Search = ({ onSubmitForm }) => {
  // Estado del Search
  const [formValues, setValues] = useState({ name: '' }); //al pasarlo al useEffect y tener Debounce dispara la búsqueda.

  const [pokemonName, setPokemonName] = useState(''); // Disparador para llamar a Api con form, input y botón enviar.

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

      if (formValues.value != "") {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formValues.value}`)
          // `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
          const pokemonData = response.data;

        
          // Llama a la función "onSubmitForm" de Buscador con los datos del Pokémon
          onSubmitForm(pokemonData);
          setError(false);
        } catch (e) {
          console.log(e);
          
          setError(true);
        }
      }
    }
    getPokemons();

  }, [formValues]);



  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...formValues,
      [name]: value
    });
    setPokemonName(pokemonName);
    setValues({ name: '' });
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
        {/* <form className="data" onSubmit={handleSubmit}>
        <input className='inputSearch'
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Nombre o número"
        /> */}
        <DebounceInput
          minLength={1}
          debounceTimeout={2000}
          onChange= {formValues => setValues({ value: formValues.target.value})}
          className='inputSearch'
          type="text"
          name="name"
          value={formValues.name}
          placeholder="Nombre o número" />

        <p>Value: {formValues.value}</p>
        {/* <button type="submit">Buscar Pokémon</button>
        </form> */}
      </div>
    </>
  );
};

export default Search;
