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
    <div className="d-flex mx-auto flex-column w-50 mt-2 p-10">
      <input
        className="form-control"
        type="text"
        name="name"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-center mt-2 w-20">
        <button className="btn btn-primary mx-2" onClick={filterList}>
          Buscar
        </button>
        <button className="btn btn-warning mx-2 w-20" onClick={reset}>
          Resetear
        </button>
      </div>
    </div>
  );
};

/* Interfaz para las propiedades recibidas en el componente */
Filter.propTypes = {
  database: PropTypes.array,
  setFilteredDatabase: PropTypes.func,
};

export default Filter;
