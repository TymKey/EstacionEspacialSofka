import React, { useState } from "react";

const initialForm = {
  name: "",
  category: "",
  id: null,
};

const NaveForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const handleReset = (e) => {};

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          category="category"
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
