import React from "react";

import { ListItem } from "./ListItem";

import "./List.scss";

export const List = ({ deleteItem, items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <ListItem deleteItem={deleteItem} item={item} key={item.index} />
        );
      })}
    </ul>
  );
};
