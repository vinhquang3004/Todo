import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

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

    const todoTitle = props.todoProps.title
    const todoCompleted = props.todoProps.completed
    const styleTodo = useStyles();
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    //style background totoItem
    const todoItemStyle = {
        background: '#f4f4f4',
        /* padding: '10px', */
        margin: '15px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todoCompleted ? 'none' : 'line-through'
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
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {/* note */}
            {todoTitle}
            {/* button delete */}
            {/* <input type='button' value="delete" /> */}
            <Button style={buttonDeleteStyle} variant="contained" color="secondary">
                Delete
            </Button>
        </div>
    )
}


export default TodoItem