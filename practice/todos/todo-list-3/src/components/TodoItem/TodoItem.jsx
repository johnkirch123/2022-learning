import React from 'react';
import { ACTIONS } from '../../context/todoActions';
import { RiDeleteBack2Line } from 'react-icons/ri';

import './index.css';

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
  return (
    <div className='todo__card'>
      <div className='todo__info'>
        <h1
          className={todo.completed ? 'todo__header--strike' : 'todo__header'}
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })
          }
        >
          {todo.todo}
        </h1>
        <h3 className='todo__date'>{dateFormatter(todo.creationDate)}</h3>
      </div>
      <div className='todo__buttons'>
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
