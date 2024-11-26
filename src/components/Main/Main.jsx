import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "./Buscador/Search";
import ListaPokemon from "./Buscador/ListaPokemon";
import Buscador from './Buscador/Buscador';
import Details from './Buscador/ListaPokemon/Card/Details/Details';


const Main = () => {

  return (
    <div>
      <main>
      <Routes>
          { <Route path='/' element={<Buscador/>} /> }
          { <Route path='/pokemon/:id' element={<Details />} /> }
          { <Route path='/*' element={<Navigate to='/' />} /> }
        </Routes> 
      </main>
    </div>
  );
};



export default Main; 

