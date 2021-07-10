import React, { useState, Fragment } from 'react'
import TodoItem from './Todo'

const TodoList = () => {
    const [todosState, setTodosState] = useState([
        { title: 'note 1', completed: false },
        { title: 'note 2', completed: false },
        { title: 'note 3', completed: false }
    ])

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoProps={todo} />
            })}
        </Fragment>
    )
}

export default TodoList