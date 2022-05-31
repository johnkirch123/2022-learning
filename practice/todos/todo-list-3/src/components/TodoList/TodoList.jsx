import React, { useContext } from 'react';
import TodoContext from '../../context/todoContext';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return <div>{state.todos}</div>;
};

export default TodoList;
