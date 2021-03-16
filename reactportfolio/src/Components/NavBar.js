import React from 'react';
import {Link } from "react-router-dom";

function NavBar() {


  return(
    <nav className="navbar navbar-expand-lg fixed-top">
    <Link className="navbar-brand" to='/'>Joe Maniaci</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <div className="nav-link emailphone">(216)978-6819 <span class="sr-only">(current)</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link emailphone">joe.maniaci1@gmail.com</div>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <Link to='/' className="nav-link">About Me</Link>
        <Link to='/portfolio'className="nav-link">Portfolio</Link>
        <Link to='/contact' className="nav-link active">Hit Me Up<span class="sr-only">(current)</span></Link>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;