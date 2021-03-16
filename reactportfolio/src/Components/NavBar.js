import React from 'react';

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg fixed-top">
    <a className="navbar-brand" href="index.html">Joe Maniaci</a>
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
        <a className="nav-link" href="index.html">About Me</a>
        <a className="nav-link" href="portfolio.html">Portfolio</a>
        <a className="nav-link active" href="contact.html">Hit Me Up<span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;