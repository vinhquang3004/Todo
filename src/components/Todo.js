import React, { Fragment } from 'react'

const TodoItem = (props) => {
    console.log(props)
    return(
        <Fragment>
            {props}
        </Fragment>
    )
}

export default TodoItem