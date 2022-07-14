import React from "react";
import NaveTableRow from "./NaveTableRow";

const NaveTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => <NaveTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NaveTable;
