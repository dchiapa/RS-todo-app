import React from "react";

import "./Form.scss";

export const Form = ({ items, setItems, setText, text }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let itemIndex = items.length + 1;
    setItems([...items, { index: itemIndex, text: text }]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form>
      <label>Elemento a agregar:</label>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleSubmit}>Agregar</button>
    </form>
  );
};
