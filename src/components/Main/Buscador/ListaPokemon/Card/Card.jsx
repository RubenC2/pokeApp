import React from "react";

const Card = ({ pokemon }) => {


  if (!pokemon) {
    return <p>No se proporcionaron datos del Pokémon</p>;
  }
  const { id, name, sprites } = pokemon

  return (
    <div className="card">
      <p>#{id}</p><br/>
      <h3>{name}</h3>
      <img src={sprites.front_default}/>
    </div>
    );
};

export default Card;