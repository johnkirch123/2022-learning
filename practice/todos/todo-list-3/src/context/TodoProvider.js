import { useReducer, useEffect } from 'react';
import { ACTIONS } from './todoActions';
import TodoContext from './todoContext';
import { initialState, todosReducer } from './todoReducer';

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_TODOS });
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
