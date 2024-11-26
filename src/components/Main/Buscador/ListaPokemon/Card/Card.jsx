import React from "react";
import Details from "./Details/Details";
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {

console.log(pokemon)

  if (!pokemon) {
    return <p>No se proporcionaron datos del Pokémon</p>;
  }
  const { id, name, sprites } = pokemon

  return (
    <div className="card">
      <p>#{id}</p><br/>
      <h3><Link to={`/details/${name}`}>{name}</Link>{name}</h3> 
      <img src={sprites.front_default}/>
      <Details key={uuidv4()} pokemon={pokemon} />
    </div>
    );
};

export default Card;