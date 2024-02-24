import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="https://images.vexels.com/media/users/3/227568/isolated/preview/6152903b89a24ce55998fee1e3147634-logotipo-naranja-shephard-alem-n.png"
            alt="Logo Perro"
            className="logo"
          />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
