import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);
    const completedTodos = todos.filter(x => x.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter( x => {
            const todoText = x.text.toLocaleLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const createTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            createTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider}