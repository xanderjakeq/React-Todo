// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'

/**
 * takes in todo list and render todo cards
 */
TodoList = (props) => {
    return(
        <div>
            <ul>
                {
                    // mapp <dodo
                    props.todos.map(todo => <Todo todo = {todo}/>)
                }
            </ul>
        </div>
    )
} 