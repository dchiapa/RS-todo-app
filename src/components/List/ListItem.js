import React from "react";

export const ListItem = ({ completeItem, item, removeItem }) => {
  let itemClass = item.completed ? "item__complete" : "";
  const handleRemove = (e) => {
    removeItem(e.target.id);
  };

  const handleComplete = (e) => {
    e.target.localName !== "button" && completeItem(e.target.id);
  };

  return (
    <li onClick={handleComplete} id={item.index} className={itemClass}>
      {item.content}{" "}
      <button id={item.index} onClick={handleRemove}>
        Eliminar
      </button>
    </li>
  );
};
