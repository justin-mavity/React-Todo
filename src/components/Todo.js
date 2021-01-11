import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.handleItemToggle(props.todo.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`todo${props.todo.complete ? " complete" : ""}`}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};
export default Todo;
