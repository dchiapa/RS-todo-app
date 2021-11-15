import React from "react";

export const Form = ({ items, setItems, setText, text }) => {
  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setItems([...items, text]);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nuevo item:</label>
      <input type="text" value={text} onChange={handleText} />
      <button>Agregar</button>
    </form>
  );
};
