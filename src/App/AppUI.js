import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './App.css';

function AppUI() {
  
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      
      <h1>Welcome to your ToDo app!</h1>

      <TodoSearch />
      
      <TodoCounter />
      
      <TodoList>
        {error && <p>There was an error ...</p>}
        {loading && (
          <FontAwesomeIcon className='spinner' icon={faSpinner} spin />
        )}
        {(!loading && !searchedTodos.length) && <p class="noTasksTxt" >You don't have tasks, you can create your first one ...</p>}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export { AppUI };
