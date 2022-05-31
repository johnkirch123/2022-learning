import React, { useState } from 'react';
import { ACTIONS } from '../../context/todoActions';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import DatePicker from 'react-datepicker';

import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

const dateFormatter = (unixTimestamp) => {
  let date = new Date(unixTimestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  return (
    hours +
    ':' +
    minutes.substr(-2) +
    ':' +
    seconds.substr(-2) +
    (hours < 12 ? ' AM' : ' PM')
  );
};

const TodoItem = ({ todo, dispatch }) => {
  const [inputEdit, setInputEdit] = useState(todo.todo);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='todo__card'>
      <div className='todo__info'>
        {todo.editMode ? (
          <input
            type='text'
            value={inputEdit}
            className='todo__input'
            onChange={(e) => setInputEdit(e.target.value)}
          />
        ) : (
          <h1
            className={todo.completed ? 'todo__header--strike' : 'todo__header'}
            onClick={() =>
              dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })
            }
          >
            {todo.todo}
          </h1>
        )}
        <h3 className='todo__date'>{dateFormatter(todo.creationDate)}</h3>
      </div>
      <div className='todo__buttons'>
        <div className='todo__date--complete'>
          <h4 className='todo__date--text'>Complete By:</h4>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        {todo.editMode ? (
          <AiOutlineCheckCircle
            size={30}
            className='todo__complete'
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_TODO,
                payload: { id: todo.id, todo: inputEdit }
              })
            }
          />
        ) : (
          <AiOutlineEdit
            size={30}
            className='todo__edit'
            onClick={() =>
              dispatch({ type: ACTIONS.EDIT_TODO, payload: todo.id })
            }
          />
        )}
        <RiDeleteBack2Line
          size={30}
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
