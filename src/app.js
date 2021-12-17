import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./app.scss";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [list, setList] = useState(() => {
    const savedData = localStorage.getItem("todoList");
    const initialValue = JSON.parse(savedData);
    return initialValue || [];
  });

  const handleAddItem = (item) => {
    setList([...list, item]);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <h1 className="todo__title">Todo List</h1>
      <TodoForm handleAddItem={handleAddItem} />
      <TodoList list={list} setList={setList} />
    </>
  );
};

render(<App />, document.getElementById("app"));
