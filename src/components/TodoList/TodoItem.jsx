import React from "react";
import "./TodoList.scss";

const TodoItem = ({ handleDelete, handleUpdate, item }) => {
  const handleUpdateClick = () => {
    handleUpdate(item.id);
  };
  const handleDeleteClick = () => {
    handleDelete(item.id);
  };

  return (
    <li className="item" id={item.id}>
      <label className="item__checkbox">
        <input
          type="checkbox"
          className="item__checkbox__input"
          readOnly
          onClick={handleUpdateClick}
        />
        <img
          className={
            item.done
              ? "item__checkbox__check"
              : "item__checkbox__check--hidden"
          }
          src={require("./img/check.png")}
          alt="check"
        />
      </label>

      <span
        className={item.done ? "item__text-complete" : "item__text"}
        onClick={handleUpdateClick}
      >
        {item.todo}
      </span>
      <button className="btn item__btn" onClick={handleDeleteClick}>
        <img className="item__btn__img" src={require("./img/delete.png")} />
      </button>
    </li>
  );
};

export default TodoItem;
