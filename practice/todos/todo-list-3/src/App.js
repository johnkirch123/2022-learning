import React from 'react';
import TodoProvider from './context/TodoProvider';

import TodoInput from './components/TodoInput/TodoInput';

const App = () => {
  return (
    <TodoProvider>
      <div className='app'>
        <TodoInput />
      </div>
    </TodoProvider>
  );
};

export default App;
