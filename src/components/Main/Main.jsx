import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from "./Buscador/Search";
import ListaPokemon from "./Buscador/ListaPokemon";
import Buscador from './Buscador/Buscador';


const Main = () => {

  return (
    <div>
      <main>
      <Routes>
          { <Route path='/' element={<Buscador/>} /> }
          { <Route path='/*' element={<Navigate to='/' />} /> }
          {/* <Route path='/list' element={<ChristmasList/>} /> */}
        </Routes> 
      </main>
    </div>
  );
};



export default Main; 

