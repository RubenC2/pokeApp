import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const ListaPokemon = ({ pokemons }) => {
  console.log("listapoke", pokemons)
  return (
    <>
      <div className="card">
        {
          pokemons.map((item, index) => (
            <Card key={uuidv4()} pokemon={item} />
          ))
        }
      </div>
    </>
  );
};

export default ListaPokemon;
