import React, { useContext, useRef } from 'react';
import { ACTIONS } from '../context/todoActions';
import TodoContext from '../context/todoContext';

const TodoInput = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <form className='todo__form'>
      <input
        type='text'
        name='text'
        value={state.text}
        className='todo__input'
        placeholder='Add Todo...'
        autoFocus
        onChange={(e) =>
          dispatch({
            type: ACTIONS.TEXT_INPUT,
            payload: { text: e.target.value }
          })
        }
      />
      <button
        className='todo__button'
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { text: state.text }
          });
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
