import React, { useContext } from 'react';
import TodoContext from '../../context/todoContext';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const {
    state: { todos },
    dispatch
  } = useContext(TodoContext);

  return (
    <div>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
