import React, { useState } from "react";

const initialForm = {
  category: "",
  name: "",
  id: null,
};

const NaveForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          onChange={handleChange}
          value={form.category}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input type="submit" value="Enviar" />
        <input type="submit" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default NaveForm;
