import React, { useState } from "react";
import PropTypes from "prop-types";

const initialForm = {
  name: "",
  category: "Lanzadera",
  id: null,
};

const Form = ({ createData }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !form.category ||
      !form.name ||
      !form.speed ||
      !form.creatorCountry ||
      !form.color
    ) {
      alert("Datos incompletos");
      return;
    }
    createData(form);
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div>
      <h3>Agregar Naves</h3>
      <form onSubmit={handleSubmit}>
        <select name="category" onChange={handleChange}>
          <option value="Lanzadera">Lanzadera</option>
          <option value="No Tripuladas">No Tripuladas</option>
          <option value="Tripuladas">Tripuladas</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="speed"
          placeholder="Velocidad"
          value={form.speed}
          onChange={handleChange}
        />
        <input
          type="text"
          name="creatorCountry"
          placeholder="País"
          value={form.creatorCountry}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={form.color}
          onChange={handleChange}
        />
        <input type="submit" value="Agregar Nave" />
      </form>
    </div>
  );
};

Form.propTypes = {
  createData: PropTypes.func
};

export default Form;
