import React, { useState } from "react";

export default function SearchBar(onSearch) {
  const { search, setSearch } = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por raza o subraza"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
