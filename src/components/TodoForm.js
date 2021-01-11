import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChange}
          name="item"
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
