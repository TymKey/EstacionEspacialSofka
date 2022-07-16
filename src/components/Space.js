import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Table from "./Table";
import { Ship } from "../models/Ship";

const initialDatabase = [];

const shipOne = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipTwo = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipThree = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipFour = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipFive = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipSix = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipSeven = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipEight = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
const shipNine = new Ship("Lanzadera", "US", "600km/h", "Apolo 11", "Blanco");
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
