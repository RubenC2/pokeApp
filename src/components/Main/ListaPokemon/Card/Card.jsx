import React from "react";

const Card = ({ pokemon }) => {


  if (!pokemon) {
    return <p>No se proporcionaron datos del Pokémon</p>;
  }
  const { id, name, sprites } = pokemon

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{id}</p>
      <img src={sprites.front_default}/>
    </div>
    );
};

export default Card;