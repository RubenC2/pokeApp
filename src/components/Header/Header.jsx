import React from "react";
import { useContext } from "react";
import { useNavigate }  from 'react-router-dom'
import Nav from "./Nav";


const Header = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <header>
      <Nav />
    <div className="logoheader">
      <img className="logo" src="/img/pokemon_logo.png" alt="Pokemon Logo" />
    </div>
    </header>
  );
};

export default Header;
