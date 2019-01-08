import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        'Learn React',
        'Do Laundry'
      ],
      todoToAdd: ""
    };
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const nextTodoAdd = event.target.value;

    this.setState({
      todoToAdd: nextTodoAdd
    });
  }

  handleClick(event) {
    const nextTodos = this.state.todos.concat(this.state.todoToAdd);
    const nextTodoToAdd = '';

    this.setState({
      todos: nextTodos,
      todoToAdd: nextTodoToAdd
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to My TODO List
          </p>
          <ul>
            {this.state.todos.map(
              (todo,index) => <li key={index}>{todo}</li>
            )}  
          </ul>
          <input
            type="text"
            placeholder="New TODO"
            value={this.state.todoToAdd}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add TODO</button>
        </header>
      </div>
    );
  }
}

export default App;
