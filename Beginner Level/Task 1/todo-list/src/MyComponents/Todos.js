import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let styles = {
    minHeight: "50vh",
  };
  return (
    <div className="container" style={styles}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos To Show"
        : props.todos.map((todos) => {
            return (
              <TodoItem
                todos={todos}
                key={todos.sno}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
};
