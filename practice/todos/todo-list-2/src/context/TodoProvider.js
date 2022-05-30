import { useReducer } from 'react';
import TodoContext from './todoContext';
import { initialState, todosReducer } from './todoReducer';

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
