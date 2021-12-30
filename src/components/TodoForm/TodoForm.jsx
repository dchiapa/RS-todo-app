import React, { useState } from "react";
import "./TodoForm.scss";

const TodoForm = ({ handleAddItem }) => {
  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleAddItem({
      done: false,
      id: new Date().getTime(),
      todo,
    });
    setTodo("");
  };

  const handleTextChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="form__container">
      <input
        type="text"
        className="form__input"
        value={todo}
        onChange={handleTextChange}
      />
      <button className="btn form__btn" disabled={todo ? "" : "disable"}>
        Agregar
      </button>
    </form>
  );
};

export default TodoForm;
