import React, { useEffect, useState } from "react";
import Filter from "./Filter";
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

function getLocal() {
  const previousDataBase = JSON.parse(
    localStorage.getItem("persistenceDataBase")
  );
  if (previousDataBase) {
    return previousDataBase;
  } else {
    return initialDatabase;
  }
}

function saveLocal(data) {
  localStorage.setItem("persistenceDataBase", JSON.stringify(data));
}

const Space = () => {
  const [database, setDatabase] = useState(initialDatabase);
  const [filteredDatabase, setFilteredDatabase] = useState(initialDatabase);

  useEffect(() => {
    setDatabase(getLocal());
    setFilteredDatabase(getLocal());
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    setDatabase([...database, data]);
    setFilteredDatabase([...database, data]);
    saveLocal([...database, data]);
  };

  return (
    <div>
      <h2>Naves Espaciales</h2>
      <Filter database={database} setFilteredDatabase={setFilteredDatabase} />
      <Form createData={createData} />
      <Table data={filteredDatabase} />
    </div>
  );
};

export default Space;
