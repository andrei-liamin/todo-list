import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{
        task: 'Learn React',
        isCompleted: true
      }, {
        task: 'Do Laundry',
        isCompleted: true
      }],
      todoToAdd: ""
    };
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleTodo= this.handleToggleTodo.bind(this);
  }

  handleChange(event) {
    const nextTodoAdd = event.target.value;

    this.setState({
      todoToAdd: nextTodoAdd
    });
  }

  handleClick(event) {
    const nextTodos = this.state.todos.concat({
    	task: this.state.todoToAdd,
    	isCompleted: false,
    });
    const nextTodoToAdd = '';

    this.setState({
      todos: nextTodos,
      todoToAdd: nextTodoToAdd
    });
  }

  handleToggleTodo(index, value) {
    this.setState({
      todos: this.state.todos.map((todo, idx) => {
        if (idx === index) {
          return Object.assign({}, todo, { isCompleted: value});
        }

        return todo;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to My TODO List
          </p>
          <ul>
            {this.state.todos.map((todo,index) => {
            	return <TodoItem 
	            	key={index}
	            	isCompleted={todo.isCompleted}
                index={index}
                onToggleTodo={this.handleToggleTodo}>
            		{todo.task}
            	</TodoItem>
            })}  
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
