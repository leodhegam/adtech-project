import React from 'react';
// import { Container } from './styles';
import {Link} from 'react-router-dom';
import './style.css'
export default function Navbar() {
  return (
    <>
    <hr  className="bg-info m-0 p-0"/>
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#page1" aria-controls="page1" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link to="/" className="navbar-brand p-1" href="#">ADTECH</Link>

<div className="container p-2">

  <div className="collapse navbar-collapse" id="page1">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link to ="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
        <Link to ="/Projetos" className="nav-link">Projetos</Link>
        </li>
        <li className="nav-item">
        <Link to ="/Contato" className="nav-link">Contato</Link>
        </li>
    </ul>
  </div>
</div>
  
</nav>

  </>
  );
}
