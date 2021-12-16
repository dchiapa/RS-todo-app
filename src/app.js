import React from "react";
import { render } from "react-dom";
import "./app.scss";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <h1>Todo App</h1>
      <Container />
    </>
  );
};

render(<App />, document.getElementById("app"));
