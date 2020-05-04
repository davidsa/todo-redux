import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./redux";

class App extends Component {
  state = {
    value: ""
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleAdd = event => {
    debugger;
    event.preventDefault();
    // dispatch del action
    const value = this.state.value;
    this.props.add(value);
    this.setState({ value: "" });
  };

  render() {
    debugger;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

const mapDispatchToProps = {
  add: addTodo
};

const connectToTodos = connect(mapStateToProps, mapDispatchToProps);

const ConnectedApp = connectToTodos(App);

export default ConnectedApp;

// connect(mapStateToProps)(App)
