import React, { useState } from "react";
import PropTypes from "prop-types";

/* Estado inicial para los inputs del formulario */
const initialForm = {
  name: "",
  speed: "",
  creatorCountry: "",
  color: "",
  category: "Lanzadera",
  id: null,
};

const Form = ({ createData }) => {
  const [form, setForm] = useState(initialForm);

  /* Guardar los cambios del formulario en un objeto */
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  /* Validar datos ingresados y crear nueva nave */
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

  /* Limpia el formulario */
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

/* Interfaz para las propiedades recibidas en el componente */
Form.propTypes = {
  createData: PropTypes.func,
};

export default Form;
