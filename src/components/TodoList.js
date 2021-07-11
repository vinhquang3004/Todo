import React, { useState, Fragment } from 'react'
import TodoItem from './Todo'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todosState, setTodosState] = useState([
        { id: uuidv4(), title: 'note 1', completed: true },
        { id: uuidv4(), title: 'note 2', completed: false },
        { id: uuidv4(), title: 'note 3', completed: false }
    ])

    //Ham thay doi trang thai completed (false -> true || true -> false)
    const markCompleted = (idCheckBox) => {
        const newObj = todosState.map(obj => {
            if (obj.id === idCheckBox) {
                obj.completed = !obj.completed
            }
            return obj
        })
        setTodosState(newObj)
    }
    //Xoa todo bang cach loc cac phan tu khong bao gom ID todo muon xoa vao array moi
    const deleteTodo = (idDelete) => {
        const newObj = todosState.filter(obj => {
            return (obj.id !== idDelete)
        })
        setTodosState(newObj)
    }

    //Them todo
    const addTodo = title => {
        // (...)spread operator : lay tat ca phan tu cua object
        const newObj = [...todosState, { id: uuidv4(), title, completed: false }]
        setTodosState(newObj)
    }

    return (
        <Fragment>
            <AddTodo addTodo={addTodo} />
            {todosState.map(obj => {
                return (
                    <TodoItem
                        key={obj.id}
                        todoProps={obj}
                        markCompleted={markCompleted}
                        deleteTodo={deleteTodo} />)
            })}
        </Fragment>
    )
}

export default TodoList