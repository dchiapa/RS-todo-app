import React from "react";

export const ListItem = ({ deleteItem, item }) => {
  return (
    <li>
      {item.text}{" "}
      <button onClick={deleteItem} id={item.index}>
        Borrar
      </button>
    </li>
  );
};
