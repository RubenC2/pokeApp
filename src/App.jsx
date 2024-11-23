import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header';

function App() {
  const [datosPokemon, setDatosPokemon] = useState()

  return (
    <>
      <div className='container'>
      <BrowserRouter >
        <Header />
        {/* <UserContext.Provider value={ userData}> */}
          <Main />
        </BrowserRouter>
        {/* </UserContext.Provider> */}
      </div>
    </>
  )
}

export default App
