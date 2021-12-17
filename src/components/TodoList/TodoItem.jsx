import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ handleDelete, handleUpdate, item }) => {
  const handleUpdateClick = () => {
    handleUpdate(item.id);
  };
  const handleDeleteClick = () => {
    handleDelete(item.id);
  };

  return (
    <li className="item" id={item.id}>
      <input
        type="checkbox"
        checked={item.done}
        readOnly
        className={item.done ? "item__checkbox-complete" : "item__checkbox"}
        onClick={handleUpdateClick}
      />
      <span
        className={item.done ? "item__text-complete" : "item__text"}
        onClick={handleUpdateClick}
      >
        {item.todo}
      </span>
      <button className="item__btn-delete" onClick={handleDeleteClick}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
