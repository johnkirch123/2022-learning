import React from 'react';
import TodoProvider from './context/TodoProvider';
import TodoInput from './components/TodoInput';

import './app.css';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='app'>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
