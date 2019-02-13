import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
      todos: [...this.state.todos, newTodo],
      input: ''
    })
  }

  handleTodoClick = (todoData) => {
    console.log()
    this.setState({
      todo: [...this.state.todos].splice(todoData.index, 1, todoData.todo)
    })
  }
  
  render() {
    return (
      <div>
        <TodoList todos = {this.state.todos} toggle = {this.handleTodoClick}/>
        <TodoForm handleInputChange = {this.handleInputChange} name = 'input' value={this.state.input} submit = {this.handleSubmit} />
      </div>
    );
  }
}

export default App;
