import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const { createTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        createTodo(newTodoValue);
        setOpenModal(false);
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Create your new task!</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Your task name here ..."
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button" 
                    onClick={onCancel}
                    > 
                    Cancel 
                </button>
                <button 
                    className="TodoForm-button TodoForm-button--submit"
                    type="submit"
                >
                    Create
                </button>
            </div>
        </form>
    );
}

export { TodoForm };