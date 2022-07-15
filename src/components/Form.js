import React, { useState } from "react";

const initialForm = {
  name: "",
  category: "Lanzadera",
  id: null,
};

const Form = ({ createData, updateData, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    console.log(event.target.value);
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
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>Agregar</h3>
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
          onChange={handleChange}
        />
        <input type="submit" value="Agregar Nave" />
      </form>
    </div>
  );
};

export default Form;
