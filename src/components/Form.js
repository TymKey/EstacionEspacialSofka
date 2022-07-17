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
    <div className="mt-4 w-70 ">
      <h3 className="text-center">Agregar Naves</h3>
      <form className="w-70 mx-auto px-5 mt-4" onSubmit={handleSubmit}>
        <select
          className="form-select form-select-lg mb-3"
          name="category"
          onChange={handleChange}
        >
          <option value="Lanzadera">Lanzadera</option>
          <option value="No Tripuladas">No Tripuladas</option>
          <option value="Tripuladas">Tripuladas</option>
        </select>
        <div className="row mt-2">
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="speed"
              placeholder="Velocidad"
              value={form.speed}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="creatorCountry"
              placeholder="País"
              value={form.creatorCountry}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="color"
              placeholder="Color"
              value={form.color}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <input
              className="btn btn-primary"
              type="submit"
              value="Agregar Nave"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

/* Interfaz para las propiedades recibidas en el componente */
Form.propTypes = {
  createData: PropTypes.func,
};

export default Form;
