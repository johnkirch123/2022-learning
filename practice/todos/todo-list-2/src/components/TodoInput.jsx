import React, { useContext, useRef } from 'react';
import { ACTIONS } from '../context/todoActions';
import TodoContext from '../context/todoContext';

const TodoInput = () => {
  const { state, dispatch } = useContext(TodoContext);
  const inputRef = useRef();
  return (
    <form className='todo__form'>
      <input
        type='text'
        name='text'
        ref={inputRef}
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
          console.log(`state in TodoInput: ${state.text}`);
          dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { text: inputRef.current.value }
          });
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
