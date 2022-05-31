import React from 'react';
import TodoProvider from './context/TodoProvider';

import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <TodoProvider>
      <div className='app'>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
