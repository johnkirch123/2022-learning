import React from 'react';
import './index.css';

const TodoForm = () => {
  return (
    <form className='todo__form'>
      <input
        name='todo'
        type='text'
        placeholder='Please enter a todo Item'
        className='todo__input'
      />
      <button className='todo__button'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
