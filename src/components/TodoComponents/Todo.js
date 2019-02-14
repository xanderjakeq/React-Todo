import React from 'react'




/**
 * Render a todo Item 
 */
const Todo = (props) => {
    const indent = {
        left: `${props.todo.indent}px`
    }

    console.log(props.todo.indent)

    return (
        <li style = {indent} className = {props.todo.completed ? 'done' : 'todoItem'} onClick = { () => {

            // toggle completed
            props.todo.completed = !props.todo.completed     
            
            props.toggle({
                todo: props.todo,
                index: props.index
            })}}
            >
            <p>{`${props.index+1} ${props.todo.task}`}</p> 
        </li>
    )
}

export default Todo;