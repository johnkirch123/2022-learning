import React from 'react';
import './index.css';

const TodoItem = ({ todo }) => {
  return (
    <div className='todo__card'>
      <h1>{todo.todo}</h1>
    </div>
  );
};

export default TodoItem;
