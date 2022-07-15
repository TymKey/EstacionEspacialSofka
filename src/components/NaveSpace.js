import React, { useState } from "react";
import NaveForm from "./NaveForm";
import NaveTable from "./NaveTable";

const initialDatabase = [
  {
    id: 1,
    category: "Lanzadera",
    name: "Apolo 11",
  },
  {
    id: 2,
    category: "Lanzadera",
    name: "Apolo 12",
  },
  {
    id: 3,
    category: "Lanzadera",
    name: "Apolo 13",
  },
  {
    id: 4,
    category: "Tripulada",
    name: "Apolo 14",
  },
  {
    id: 5,
    category: "Tripulada",
    name: "Apolo 15",
  },
  {
    id: 6,
    category: "Tripulada",
    name: "Apolo 16",
  },

  {
    id: 7,
    category: "Espaciales",
    name: "Apolo 17",
  },
  {
    id: 8,
    category: "Espaciales",
    name: "Apolo 18",
  },
  {
    id: 9,
    category: "Espaciales",
    name: "Apolo 19",
  },
];

const NaveSpace = () => {
  const [database, setDatabase] = useState(initialDatabase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDatabase(...database, data);
  };

  const updateData = (data) => {};

  const deleteData = (id) => {};

  return (
    <div>
      <h2>Naves Espaciales</h2>
      <NaveForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <NaveTable
        data={database}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default NaveSpace;
