import React from "react";

const TodoForm = ({ handleAddItem }) => {
  return (
    <form onSubmit={handleFormSubmit} className="form__container">
      <input
        type="text"
        className="form__input"
        value={todo}
        onChange={handleTextChange}
      />
      <button className="form__button" disabled={todo ? "" : "disable"}>
        Agregar
      </button>
    </form>
  );
};

export default TodoForm;
