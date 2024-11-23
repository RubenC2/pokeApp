import React, { useState } from 'react';

const Search = ({ onSubmitForm }) => {
  // Estado del Search
  const [formValues, setValues] = useState({
    name: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setValues({
      ...formValues,
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonName = formValues.name.trim(); // Trim hace que no haya espacios al inicio o al final
    if (pokemonName) {
      onSubmitForm(pokemonName); 
      setValues({ name: '' }); 
    } else {
      alert("Inserta el nombre de un Pokémon.");
    }
  };

  return (
    <>
      <h1>Hazte con todos</h1>
      <form className="data" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Nombre del Pokémon"
        />
        <button type="submit">Buscar Pokémon</button>
      </form>
    </>
  );
};

export default Search;
