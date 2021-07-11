import React, { useState, Fragment } from 'react'
import TodoItem from './Todo'

const TodoList = () => {
    const [todosState, setTodosState] = useState([
        { id: 1, title: 'note 1', completed: true },
        { id: 2, title: 'note 2', completed: false },
        { id: 3, title: 'note 3', completed: false }
    ])

    //Ham thay doi trang thai completed (false -> true || true -> false)
    const markCompleted = (idCheckBox) => {
        const newObj = todosState.map(obj => {
            if(obj.id === idCheckBox){
                obj.completed = !obj.completed
            }
            return obj
        })
        setTodosState(newObj)
    }

    return (
        <Fragment>
            {todosState.map(obj => {
                return <TodoItem todoProps={obj} markCompleted = {markCompleted}/>
            })}
        </Fragment>
    )
}

export default TodoList