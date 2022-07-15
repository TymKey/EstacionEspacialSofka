import React from "react";

const NaveTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.category}</td>
      <td>{el.name}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default NaveTableRow;
