import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, setList }) => {
  const handleDeleteCompletedes = () => {
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
        <button className="list__button" onClick={handleDelete}>
          Borrar tareas terminadas
        </button>
      ) : null}
    </div>
  );
};

export default TodoList;
