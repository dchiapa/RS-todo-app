import React, { useState } from "react";
import { render } from "react-dom";
import "./app.scss";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

const App = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  return (
    <>
      <h1>Todo App</h1>
      <p>
        Versión simple, permite agregar, borrar y marcar los elementos
        completados en un listado. El listado se pierde al cerrar el navegador.
      </p>
      <Form items={items} setItems={setItems} setText={setText} text={text} />
      <List items={items} />
    </>
  );
};

render(<App />, document.getElementById("app"));
