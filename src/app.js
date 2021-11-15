import React, { useState } from "react";
import { render } from "react-dom";
import "./app.scss";
import { Form } from "./components/Form/Form";

const App = () => {
  const [text, setText] = useState("");
  return (
    <>
      <h1>Todo App</h1>
      <p>
        Versión simple, permite agregar, borrar y marcar los elementos
        completados en un listado. El listado se pierde al cerrar el navegador.
      </p>
      <Form text={text} setText={setText} />
    </>
  );
};

render(<App />, document.getElementById("app"));
