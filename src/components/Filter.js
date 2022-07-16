import React, { useState } from "react";

const Filter = ({ database, setFilteredDatabase }) => {
  const [search, setSearch] = useState("");

  const filterList = () => {
    const naves = database.filter(
      (nave) =>
        nave.category.toUpperCase().includes(search) ||
        nave.name.toUpperCase().includes(search)
    );
    setFilteredDatabase(naves);
    setSearch("");
  };

  const handleChange = (event) => {
    setSearch(event.target.value.toUpperCase());
  };

  const reset = () => {
    setFilteredDatabase(database);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <button onClick={filterList}>Buscar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default Filter;
