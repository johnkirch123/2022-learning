import React, { useContext } from 'react';
import todoContext from '../context/todoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const {
    state: { todos },
    dispatch
  } = useContext(todoContext);

  return (
    <div className='todo__list'>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
