import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './app.css';

const App = () => {
  return (
    <div className='app'>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
