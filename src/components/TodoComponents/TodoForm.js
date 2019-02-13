import React from 'react'

/**
 * Takes input and add todo to list 
 */
const TodoForm = (props) => {
    return (
        <form className = 'todoForm' onSubmit = { props.submit}>
            <input type='text' name = {props.name} value = {props.value} onChange = { props.handleInputChange} placeholder = 'press Enter to add'/>
        </form>
    )
}

export default TodoForm;
