import React, { useState } from "react";

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
    if (!form.category || !form.name) {
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
          <option value="Tripulada">Tripulada</option>
          <option value="Espaciales">Espaciales</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input type="submit" value="Agregar Nave" />
      </form>
    </div>
  );
};

export default Form;
