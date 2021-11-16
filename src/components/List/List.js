import React from "react";
import "./List.scss";
import { ListItem } from "./ListItem";

export const List = ({ items, setItems }) => {
  let itemsList = [];

  const removeItem = (id) => {
    itemsList = items.filter((item) => item.index != id);
    setItems(itemsList);
  };

  const completeItem = (id) => {
    itemsList = items.map((item) => {
      if (item.index == id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(itemsList);
  };

  return (
    <ul>
      {items.map((item) => {
        return (
          <ListItem
            completeItem={completeItem}
            item={item}
            key={item.index}
            removeItem={removeItem}
          />
        );
      })}
    </ul>
  );
};
