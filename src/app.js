import React, { useState } from "react";
import { render } from "react-dom";
import "./app.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (item) => {
    setList([...list, item]);
  };

  return (
    <>
      <h1 className="todo__title">Todo List</h1>
      <TodoForm handleAddItem={handleAddItem} />
      <TodoList list={list} setList={setList} />
    </>
  );
};

render(<App />, document.getElementById("app"));
