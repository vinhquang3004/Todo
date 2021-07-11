import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import propTypes from 'prop-types'
//test git
const TodoItem = (props) => {
    //style material
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const todoId = props.todoProps.id
    const todoTitle = props.todoProps.title
    const todoCompleted = props.todoProps.completed
    const styleTodo = useStyles();
    const [checked, setChecked] = React.useState(true);
    const markCompleted = props.markCompleted

    //style background totoItem
    const todoItemStyle = {
        background: '#f4f4f4',
        /* padding: '10px', */
        margin: '15px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todoCompleted ? 'line-through' : 'none'
    }

    //style button delete
    const buttonDeleteStyle = {
        float: 'right',
        borderRadius: '15%'
    }

    return (
        <div style={todoItemStyle} className={styleTodo.root}>
            {/* checkbox */}
            <Checkbox
                onChange={markCompleted.bind(this, todoId)}
                checked={todoCompleted}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {/* note */}
            {todoTitle}
            {/* button delete */}
            <Button style={buttonDeleteStyle} variant="contained" color="secondary">
                Delete
            </Button>
        </div>
    )
}

//kiem tra kieu du lieu props
TodoItem.propTypes = {
    todoProps: propTypes.func.isRequired,
    markCompleted: propTypes.func.isRequired
};

export default TodoItem