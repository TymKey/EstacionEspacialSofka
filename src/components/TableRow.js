import React from "react";

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

export default TableRow;
