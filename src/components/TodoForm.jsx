import React from "react";

const TodoForm = ({ handleAddItem }) => {
  return <form onSubmit={handleFormSubmit} className="form__container"></form>;
};

export default TodoForm;
