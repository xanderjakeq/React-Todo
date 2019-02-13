import React from 'react'

/**
 * Render a todo Item 
 */
const Todo = (props) => {
    return (
        <li className = {props.todo.completed ? 'done' : 'todoItem'} onClick = { () => {

            // toggle completed
            props.todo.completed = !props.todo.completed     
            
            props.toggle({
                todo: props.todo,
                index: props.index
            })}}
            >
            <p>{props.todo.task}</p> 
        </li>
    )
}

export default Todo;