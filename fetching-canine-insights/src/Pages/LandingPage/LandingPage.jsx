import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <NavBar />
        <h1 className="hero">Álbum de Fotos de Perros 🐕✨</h1>
        <p>¡Explora nuestras adorables fotos de perros!</p>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Bienvenido a Nuestra App</h2>
            <p>Descubre la belleza y alegría de nuestros amigos peludos.</p>

            <Link to="/home" className="explore-button">
              Explorar Más
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <p>
          &copy; 2024 Álbum de Fotos de Perros. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
