import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [datosPokemon, setDatosPokemon] = useState()

  return (
    <>

      {/* <div className='container'> */}
      <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
      {/* </div> */}
    </>
  )
}

export default App
