import React from 'react'

/**
 * Takes input and add todo to list 
 */
const TodoForm = (props) => {
    return (
        <form onSubmit = { props.submit}>
            <input type='text' name = {props.name} value = {props.value} onChange = { props.handleInputChange} />
            <button type='submit'> Submit </button>
        </form>
    )
}

export default TodoForm;
