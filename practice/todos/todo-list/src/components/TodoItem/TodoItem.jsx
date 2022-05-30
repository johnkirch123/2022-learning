import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { ACTIONS } from '../../context/todoActions';

import './index.css';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <div className='todo__card'>
      <h1
        className={todo.complete ? 'todo__todo--strike' : 'todo__todo'}
        onClick={() =>
          dispatch({ type: ACTIONS.COMPLETE_TODO, payload: todo.id })
        }
      >
        {todo.todo}
      </h1>

      <div className='todo__buttons'>
        <TiDelete
          size={40}
          className='todo__delete'
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })
          }
        />
      </div>
    </div>
  );
};

export default TodoItem;
