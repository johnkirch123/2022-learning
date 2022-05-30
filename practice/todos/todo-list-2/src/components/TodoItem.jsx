import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { ACTIONS } from '../context/todoActions';

const TodoItem = ({ todo, dispatch }) => {
  const [updatedText, setUpdatedText] = useState(todo.text);
  return (
    <div className='todo__card'>
      {todo.editMode ? (
        <input
          className='todo__item--input'
          type='text'
          value={todo.text}
          name='text'
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <h2
          className={`todo__text ${todo.completed ? 'complete' : 'incomplete'}`}
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_COMPLETE,
              payload: {
                id: todo.id
              }
            })
          }
        >
          {todo.text}
        </h2>
      )}
      <div className='todo__buttons'>
        {todo.editMode ? (
          <AiOutlineCheckCircle
            className='todo__icons'
            size={30}
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_TODO,
                payload: { id: todo.id, text: updatedText }
              })
            }
          />
        ) : (
          <AiOutlineEdit
            className='todo__icons'
            size={30}
            onClick={() =>
              dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
            }
          />
        )}

        <RiDeleteBin6Line
          className='todo__icons'
          size={30}
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        />
      </div>
    </div>
  );
};

export default TodoItem;
