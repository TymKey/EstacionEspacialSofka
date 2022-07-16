import React from "react";
import PropTypes from "prop-types";
import { Ship } from "../models/Ship";

/* Renderizar cada una de las filas de la tabla */
const TableRow = ({ ship }) => {
  return (
    <tr>
      <td>{ship.category}</td>
      <td>{ship.name}</td>
      <td>{ship.speed}</td>
      <td>{ship.creatorCountry}</td>
      <td>{ship.color}</td>
    </tr>
  );
};

/* Interfaz para las propiedades recibidas en el componente */
TableRow.propTypes = {
  ship: PropTypes.instanceOf(Ship),
};

export default TableRow;
