import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

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

function obtenerLocal() {
  const previousDataBase = JSON.parse(
    localStorage.getItem("persistenceDataBase")
  );
  if (previousDataBase) {
    return previousDataBase;
  } else {
    return initialDatabase;
  }
}

function guardarLocal(data) {
  localStorage.setItem("persistenceDataBase", JSON.stringify(data));
}

const Space = () => {
  const [database, setDatabase] = useState(initialDatabase);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    setDatabase(obtenerLocal());
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDatabase([...database, data]);
    guardarLocal([...database, data]);
  };

  return (
    <div>
      <h2>Naves Espaciales</h2>
      
      <Form
        createData={createData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <Table data={database} setDataToEdit={setDataToEdit} />
    </div>
  );
};

export default Space;
