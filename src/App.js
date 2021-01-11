import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./index.css";

const todo = [
  {
    name: "",
    id: "",
    complete: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  handleItemToggle = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      }),
    });
  };

  handleAddTodo = (itemName) => {
    const item = {
      name: itemName,
      id: this.state.todo.length,
      complete: false,
    };

    const newTodoList = [...this.state.todo, item];

    this.setState({
      todo: newTodoList,
    });
  };

  clearCompleted = () => {
    const newTodoList = this.state.todo.filter((item) => {
      return !item.complete;
    });
    this.setState({
      todo: newTodoList,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTodo={this.handleAddTodo} />
        </div>
        <TodoList
          todo={this.state.todo}
          handleItemToggle={this.handleItemToggle}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
