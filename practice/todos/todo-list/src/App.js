import React from 'react';
import TodoProvider from './context/TodoProvider';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './app.css';

const App = () => {
  return (
    <TodoProvider>
      <div className='app'>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
