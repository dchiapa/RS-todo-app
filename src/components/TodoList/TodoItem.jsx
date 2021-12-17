import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ handleUpdate, item }) => {
  const handleClick = () => {
    handleUpdate(item.id);
  };

  return (
    <li className="item" id={item.id} onClick={handleClick}>
      <input
        type="checkbox"
        checked={item.done}
        readOnly
        className={item.done ? "item__checkbox-complete" : "item__checkbox"}
      />
      <span className={item.done ? "item__text-complete" : "item__text"}>
        {item.todo}
      </span>
    </li>
  );
};

export default TodoItem;
