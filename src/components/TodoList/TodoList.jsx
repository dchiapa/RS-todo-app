import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.scss";

const TodoList = ({ list, setList }) => {
  const handleDeleteCompleted = () => {
    let deletedList = list.filter((item) => item.done != true);
    setList(deletedList);
  };

  const handleUpdate = (id) => {
    let updateList = list.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setList(updateList);
  };

  const handleDelete = (id) => {
    let deleteList = list.filter((item) => item.id !== id);
    setList(deleteList);
  };

  return (
    <div>
      {list.length > 0 ? (
        <ul className="list__container">
          {list.length > 0 &&
            list.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
            })}
        </ul>
      ) : null}
      {list.length > 0 ? (
        <button
          className="btn list__btn"
          disabled={list.find((item) => item.done == true) ? "" : "disable"}
          onClick={handleDeleteCompleted}
        >
          Borrar tareas terminadas
        </button>
      ) : null}
    </div>
  );
};

export default TodoList;
