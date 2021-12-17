import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ handleUpdate, item }) => {
  const handleClick = () => {
    handleUpdate(item.id);
  };

  return (
    <li className="item" id={item.id} onClick={handleClick}>
      <label className="item__completed__label"></label>
      <span
        className={item.done ? "list__item__text-complete" : "list__item__text"}
      >
        {item.todo}
      </span>
    </li>
  );
};

export default TodoItem;
