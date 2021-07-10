import React, { useState, Fragment } from 'react'
import TodoItem from './Todo'

const TodoList = () => {
    const [todosState, setTodosState] = useState(['todo 1', 'todo 2', 'todo 3'])

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoProps = {todo}/>
            })}
        </Fragment>
    )
}

export default TodoList