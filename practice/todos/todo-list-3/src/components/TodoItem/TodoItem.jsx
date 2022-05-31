import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <div className='todo__card'>
      <div className='todo__info'>
        <h1 className='todo__header'>{todo.todo}</h1>
        <h3 className='todo__date'>{todo.creationDate}</h3>
      </div>
    </div>
  );
};

export default TodoItem;
