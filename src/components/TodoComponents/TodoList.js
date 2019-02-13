// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'

import './Todo.css'

/**
 * takes in todo list and render todo cards
 */
const TodoList = (props) => {
    return(
        <div>
            <ul>
                {
                    props.todos.map((todo, index) => <Todo index = {index} key = {todo.id} todo = {todo} toggle = {props.toggle}/>)
                }
            </ul>
        </div>
    )
} 

export default TodoList;