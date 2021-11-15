import React from "react";

export const Form = ({ setText, text }) => {
  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      console.log(text);
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
