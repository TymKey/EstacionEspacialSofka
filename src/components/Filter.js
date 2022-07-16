import React, { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ database, setFilteredDatabase }) => {
  const [search, setSearch] = useState("");

  /* Realizar el filtrado teniendo en cuenta cualquier coincidencia con las propiedades de las naves */
  const filterList = () => {
    const naves = database.filter(
      (nave) =>
        nave.category.toUpperCase().includes(search) ||
        nave.name.toUpperCase().includes(search) ||
        nave.speed.toUpperCase().includes(search) ||
        nave.creatorCountry.toUpperCase().includes(search) ||
        nave.color.toUpperCase().includes(search)
    );
    setFilteredDatabase(naves);
    setSearch("");
  };

  /* Guardar en un estado el valor de la caja de texto */
  const handleChange = (event) => {
    setSearch(event.target.value.toUpperCase());
  };

  /* Mostrar las naves de nuevo sin aplicar ningun filtro */
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

/* Interfaz para las propiedades recibidas en el componente */
Filter.propTypes = {
  database: PropTypes.array,
  setFilteredDatabase: PropTypes.func
};

export default Filter;
