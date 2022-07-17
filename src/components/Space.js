import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Table from "./Table";
import { Ship } from "../models/Ship";

/* Crear lista de objetos vacia como base de datos inicial */
const initialDatabase = [];

/* Instanciar objetos de ejemplo con la clase Ship */
const shipOne = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco", 1);
const shipTwo = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco", 2);
const shipThree = new Ship(
  "Lanzadera",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  3
);
const shipFour = new Ship(
  "No Tripuladas",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  4
);
const shipFive = new Ship(
  "No Tripuladas",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  5
);
const shipSix = new Ship(
  "No Tripuladas",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  6
);
const shipSeven = new Ship(
  "Tripuladas",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  7
);
const shipEight = new Ship(
  "Tripuladas",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  8
);
const shipNine = new Ship(
  "Tripuladas",
  "US",
  "600km/h",
  "Apolo 11",
  "Blanco",
  9
);

/* Inyectar objetos instanciados dentro de la lista de base de datos */
initialDatabase.push(
  shipOne,
  shipTwo,
  shipThree,
  shipFour,
  shipFive,
  shipSix,
  shipSeven,
  shipEight,
  shipNine
);

/* Obtener base de datos guardada previamente en el navegador del usuario a modo de persistencia */
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

/* Guardar cambios de la base de datos en el navegador */
function saveLocal(data) {
  localStorage.setItem("persistenceDataBase", JSON.stringify(data));
}

const Space = () => {
  const [database, setDatabase] = useState(initialDatabase);
  const [filteredDatabase, setFilteredDatabase] = useState(initialDatabase);

  /* Obtener datos guardados al iniciar la aplicacion */
  useEffect(() => {
    setDatabase(getLocal());
    setFilteredDatabase(getLocal());
  }, []);

  /* Añadir nuevo elemento a la base de datos */
  const createData = (data) => {
    data.id = Date.now();
    setDatabase([...database, data]);
    setFilteredDatabase([...database, data]);
    saveLocal([...database, data]);
  };

  return (
    <div>
      <h2 className="text-center mt-4">Naves Espaciales</h2>
      <Filter database={database} setFilteredDatabase={setFilteredDatabase} />
      <Form createData={createData} />
      <Table data={filteredDatabase} />
    </div>
  );
};

export default Space;
