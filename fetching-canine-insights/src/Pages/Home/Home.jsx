import React, { useState, useEffect } from "react";
import "./Home.css";
import { Card, Footer, NavBar } from "../../Components";

export default function Home() {
  const [breedsData, setBreedsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setBreedsData(data.message);
        console.log(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <NavBar />
      </header>

      <div className="title">
        <h1>DOG LIST</h1>
      </div>

      <main className="cards-container">
        {Object.keys(breedsData).map((breed) => (
          <Card key={breed} breed={breed} subBreeds={breedsData[breed]} />
        ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
