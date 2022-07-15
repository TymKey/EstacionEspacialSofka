import React from "react";

const TableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.category}</td>
      <td>{el.name}</td>
    </tr>
  );
};

export default TableRow;
