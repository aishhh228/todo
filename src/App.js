import React from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/Todolist';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <>
       <NewTodoForm/>
      <TodoList/>
     <TodoItems/>
    </>
   
     
  );
}

export default App;
