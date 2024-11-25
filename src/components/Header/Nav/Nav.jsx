import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav className="nav_generic">
    <ul className='nav'>
      <li className="nav-link active"><Link to='/'>Pokédex</Link></li>
      <li className="nav-link " > <Link to='/'>Lista</Link></li >
      <li className="nav-link "><Link to='/'>Contact</Link></li>
      <li className="nav-link " > <Link to='/'>Equipo</Link></li >
      <li className="nav-link " > <Link to='/'>Topic</Link></li >
      
    </ul >
  </nav>;
};

export default Nav;