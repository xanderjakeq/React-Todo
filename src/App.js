import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import './components/TodoComponents/Todo.css'


class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      todos : [],
      input: '',
      indent: 0,
      indentIncrement: 40
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

    let newTask = this.state.input
    let indent = this.state.indent
    if(newTask.charAt(0) ===  '>' || newTask.charAt(0) ===  '<'){
      if(newTask.charAt(0) ===  '>'){
          indent += this.state.indentIncrement
      }else if(newTask.charAt(0) ===  '<' && indent > 0){
        indent -= this.state.indentIncrement
      }
      newTask = newTask.substring(1)
    }


    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false,
      indent: indent
    }
    this.setState({
      todos: [ ...this.state.todos, newTodo],
      input: '',
      indent: indent
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
        <h2>Lines: <span className = "todosCount">{this.state.todos.length}</span></h2>
        <p>{`start line with > or < to increase/decrease indentation`}</p>
        <TodoList indent = {this.state.indent} todos = {this.state.todos} toggle = {this.handleTodoClick}/>
        <TodoForm handleInputChange = {this.handleInputChange} name = 'input' value={this.state.input} submit = {this.handleSubmit} />
        <button onClick = {this.handleClearCompleted} className = 'clearButton'> Clear completed</button>
      </div>
    );
  }
}

export default App;
