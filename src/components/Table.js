import React from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";

/* Rederizar Headers para tabla */
const Table = ({ data }) => {
  return (
    <div className="mt-4">
      <h3 className="text-center">Tabla Datos</h3>
      <table className="table table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nombre</th>
            <th>Altitud</th>
            <th>País</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5">Sin datos</td>
            </tr>
          ) : (
            data.map((ship) => <TableRow key={ship.id} ship={ship} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

/* Interfaz para las propiedades recibidas en el componente */
Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
