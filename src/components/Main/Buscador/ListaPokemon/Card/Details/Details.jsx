import React from "react";
import { useParams } from "react-router-dom";


const Details = ({ pokemon }) => {
  console.log("paramsssss", pokemon)
  
  if (!pokemon) {
    return <p>No se proporcionaron datos del Pokémon</p>;
  }
  const { id, sprites, } = pokemon;
  const { name } = useParams();
  
  
  return (
    <div>
      <p>#{id}</p><br />
      <h3>{name}</h3>
      <img src={sprites.front_default} />
    </div>

  )
};

export default Details;
