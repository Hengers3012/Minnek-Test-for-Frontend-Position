// Card.js
import React from "react";
import "./Card.css";

export default function Card({ breed, subBreeds }) {
  const hasSubBreeds = subBreeds.length > 0;

  return (
    <div className={`card ${hasSubBreeds ? "has-sub-breeds" : ""}`}>
      <h2>{breed}</h2>
      {hasSubBreeds && <div className="sub-breed-indicator">&#8226;</div>}
      {hasSubBreeds && (
        <ul className="sub-breeds">
          {subBreeds.map((subBreed, index) => (
            <li key={index}>{subBreed}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
