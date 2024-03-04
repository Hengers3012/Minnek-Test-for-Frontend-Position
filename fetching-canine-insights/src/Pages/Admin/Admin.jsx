import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { SearchBar } from "../../Components";

export default function Admin() {
  return (
    <div className="admin-page">
      <header className="header">
        <NavBar />
      </header>

      <main>
        <section>
          <SearchBar />
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Imagen</th>
                <th>Raza</th>
                <th>Subrazas</th>
              </tr>
            </thead>
          </table>
        </section>
      </main>
    </div>
  );
}
