import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <NavBar />
        <h1>Álbum de Fotos de Perros 🐕✨</h1>
        <p>¡Explora nuestras adorables fotos de perros!</p>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Bienvenido a Nuestro App</h2>
            <p>Descubre la belleza y alegría de nuestros amigos peludos.</p>

            <Link to="/home" className="explore-button">
              Explorar Más
            </Link>
          </div>
        </section>

        <section className="about-section">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos amantes de los perros, estamos comprometidos a capturar
            momentos especiales de estos increíbles compañeros.
          </p>
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
