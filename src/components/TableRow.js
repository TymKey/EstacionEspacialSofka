import React from "react";
import PropTypes from "prop-types";
import { Ship } from "../models/Ship";

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

TableRow.propTypes = {
  ship: PropTypes.instanceOf(Ship),
};

export default TableRow;
