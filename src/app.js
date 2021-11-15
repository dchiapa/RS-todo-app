import React from "react";
import { render } from "react-dom";
import "./app.scss";

const App = () => {
  return (
    <>
      <h1>Todo App</h1>
      <p>
        Versión simple, permite agregar, borrar y marcar los elementos
        completados en un listado. El listado se pierde al cerrar el navegador.
      </p>
    </>
  );
};

render(<App />, document.getElementById("app"));
