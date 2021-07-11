import React, { useState } from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const AddTodo = (props) => {
    const addTodo = props.addTodo
    const [title, setTitle] = useState('')

    //Style
    const buttonDeleteStyle = {
        float: 'right',
    }

    const typeText = {
        padding: '60px',
        textAlign: 'center',
        color: 'black',
        fontSize: '30px',
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    //Khi nguoi dung nhap -> text thay doi -> setState vao newTitle 
    const changeTitle = event => {
        setTitle(event.target.value)
    }

    //Neu nguoi dung nhap -> text != null -> truyen title cua newTitle vao addTodo
    const handleSubmit = (event) => {
        event.preventDefault();
        if (title !== ''){
            addTodo(title)
            setTitle('')
        }
            
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <label style={typeText}>
                <TextField id="outlined-basic" value = {title} label="New Todo" variant="outlined" onChange={changeTitle}/>
            </label>
            <Button style={buttonDeleteStyle} variant="contained" color="secondary" onClick={handleSubmit}>
                Submit
            </Button>
        </form>
    )
}

//kiem tra kieu du lieu props
AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired,
}

export default AddTodo