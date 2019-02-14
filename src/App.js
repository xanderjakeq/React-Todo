import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import './components/TodoComponents/Todo.css'


class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      todos : [],
      input: ''
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [newTodo, ...this.state.todos],
      input: ''
    })
  }

  handleTodoClick = (todoData) => {
    
    let prevTodos = this.state.todos

    prevTodos.splice(todoData.index, 1, todoData.todo)

    this.setState({
      todos: prevTodos
    })
  }

  handleClearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }
  
  render() {
    return (
      <div>
        <h2>Todos: <span className = "todosCount">{this.state.todos.length}</span></h2>
        <TodoList todos = {this.state.todos} toggle = {this.handleTodoClick}/>
        <TodoForm handleInputChange = {this.handleInputChange} name = 'input' value={this.state.input} submit = {this.handleSubmit} />
        <button onClick = {this.handleClearCompleted} className = 'clearButton'> Clear completed</button>
      </div>
    );
  }
}

export default App;
