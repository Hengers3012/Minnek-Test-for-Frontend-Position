import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  const location = useLocation(); // Obtener la ruta actual

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
        {location.pathname === "/" ? (
          <div>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        ) : (
          <Link to="/command-and-conquer" className="nav-link">
            Command and Conquer
          </Link>
        )}
      </div>
    </nav>
  );
}
