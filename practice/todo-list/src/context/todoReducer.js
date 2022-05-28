import { ACTIONS } from './todoActions';

export const initialState = {
  todos: [],
  inputValue: ''
};

const addTodo = (todo) => {
  return {
    id: Date.now(),
    todo,
    complete: false
  };
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, addTodo(action.payload)],
        inputValue: ''
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case ACTIONS.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        })
      };
    case ACTIONS.INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
