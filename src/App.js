import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
//import './Styles/App.css';

let todos = [
  {text: 'Todo1', completed: false},
  {text: 'Todo2', completed: false},
  {text: 'Todo3', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
