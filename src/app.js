import React, { useState } from "react";
import { render } from "react-dom";

import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

import "./app.scss";

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const deleteItem = (e) => {
    const id = e.target.id;
    const newItems = items.filter((item) => item.index != id);
    setItems(newItems);
  };

  return (
    <>
      <h1>Todo App</h1>
      <p>
        Versión simple, permite agregar y borrar elementos a un listado. El
        listado se pierde al cerrar el navegador.
      </p>
      <Form items={items} setItems={setItems} setText={setText} text={text} />
      <List items={items} deleteItem={deleteItem} />
    </>
  );
};

render(<App />, document.getElementById("app"));
