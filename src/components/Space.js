import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Table from "./Table";
import { Ship } from "../models/Ship";

/* Crear lista de objetos vacia como base de datos inicial */
const initialDatabase = [];

/* Instanciar objetos de ejemplo con la clase Ship */
const shipOne = new Ship(
  "Lanzadera",
  "Ruso",
  "8800km",
  "R-7 Semiorka",
  "Amarillo",
  1
);
const shipTwo = new Ship(
  "Lanzadera",
  "Estados Unidos",
  "9600km",
  "Saturno V",
  "Blanco",
  2
);
const shipThree = new Ship(
  "Lanzadera",
  "Estados Unidos",
  "350km",
  "Astrobee 200",
  "Rojo",
  3
);
const shipFour = new Ship(
  "No Tripuladas",
  "Ruso",
  "450km",
  "Progress",
  "Negro",
  4
);
const shipFive = new Ship(
  "No Tripuladas",
  "Estados Unidos",
  "680km",
  "SpaceX Dragon",
  "Blanco",
  5
);
const shipSix = new Ship(
  "No Tripuladas",
  "Estados Unidos",
  "890km",
  "Cygnus",
  "Verde",
  6
);
const shipSeven = new Ship(
  "Tripuladas",
  "Estados Unidos",
  "122km",
  "Apolo 11",
  "Blanco",
  7
);
const shipEight = new Ship(
  "Tripuladas",
  "Unión Soviética",
  "158km",
  "Soyuz",
  "Gris",
  8
);
const shipNine = new Ship(
  "Tripuladas",
  "China",
  "136km",
  "Shenzhou",
  "Azul",
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
