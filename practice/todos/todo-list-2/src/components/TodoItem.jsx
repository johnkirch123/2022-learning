import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { ACTIONS } from '../context/todoActions';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <div className='todo__card'>
      <h2 className='todo__text'>{todo.text}</h2>
      <div className='todo__buttons'>
        <AiOutlineEdit />
        <RiDeleteBin6Line
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        />
      </div>
    </div>
  );
};

export default TodoItem;
