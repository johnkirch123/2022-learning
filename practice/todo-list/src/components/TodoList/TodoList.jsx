import React, { useContext } from 'react';
import todoContext from '../../context/todoContext';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const { state } = useContext(todoContext);
  return (
    <div className='todo__list'>
      {state.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
