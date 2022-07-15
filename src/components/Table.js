import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div>
      <h3>Tabla Datos</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => <TableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
