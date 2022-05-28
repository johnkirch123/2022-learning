import React, { useContext } from 'react';
import { ACTIONS } from '../../context/todoActions';
import TodoContext from '../../context/todoContext';
import './index.css';

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <form className='todo__form'>
      <input
        name='todo'
        type='text'
        value={state.inputValue}
        placeholder='Please enter a todo Item'
        className='todo__input'
        onChange={(e) =>
          dispatch({ type: ACTIONS.INPUT_VALUE, payload: e.target.value })
        }
      />
      <button
        className='todo__button'
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTIONS.ADD_TODO,
            payload: state.inputValue
          });
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
