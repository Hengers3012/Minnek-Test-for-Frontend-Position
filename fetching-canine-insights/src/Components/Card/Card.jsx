import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card({ breed, subBreeds }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const hasSubBreeds = subBreeds.length > 0;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fetchBreedImage = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await response.json();
      setImageUrl(data.message);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching breed image:", error);
    }
  };

  useEffect(() => {
    fetchBreedImage();
  }, [breed]);

  const capitalizedBreed = capitalizeFirstLetter(breed);
  const capitalizedSubBreeds = subBreeds.map((subBreed, index) => ({
    name: capitalizeFirstLetter(subBreed),
    number: index + 1,
  }));

  return (
    <div
      className={`card ${loading ? "loading" : ""} ${
        hasSubBreeds ? "has-sub-breeds" : ""
      }`}
    >
      <section className="image-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img
              src={imageUrl}
              alt={capitalizedBreed}
              className="breed-image"
            />

            <div className="sub-breed-indicator">
              {hasSubBreeds ? "🟢" : "🟡"}
            </div>

            <div className="sub-breed">
              <section>
                <h1 className="sub-breed-title">Sub-Razas</h1>
              </section>

              <section className="">
                {hasSubBreeds ? (
                  <ul className="sub-breed-list">
                    {capitalizedSubBreeds.map(({ name, number }) => (
                      <li key={number}>{`${number}. ${name}`}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-sub-breeds">No hay sub-razas disponibles</p>
                )}
              </section>
            </div>
          </>
        )}
      </section>

      <section className="name-container">
        <h2 className="breed">{capitalizedBreed}</h2>
      </section>
    </div>
  );
}
