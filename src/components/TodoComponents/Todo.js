import React from 'react'

/**
 * Render a todo Item 
 */
const Todo = (props) => {
    return (
        <li onClick = { () => {

            // toggle completed
            props.todo.completed = !props.todo.completed     
            
            props.toggle({
                todo: props.todo,
                index: props.index
            })}}>
            <p  className = {props.todo.completed ? 'done' : null}>{props.todo.task}</p> 
        </li>
    )
}

export default Todo;