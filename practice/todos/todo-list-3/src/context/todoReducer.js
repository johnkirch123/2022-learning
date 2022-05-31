import { ACTIONS } from './todoActions';

export const initialState = {
  todos: [],
  inputValue: ''
};

const readLocalStorage = () => {
  if (localStorage.getItem('todos'))
    return JSON.parse(localStorage.getItem('todos'));
};

const writeLocalStorage = (state) => {
  localStorage.setItem('todos', JSON.stringify(state));
};

const createTodo = (todo) => {
  return {
    id: Date.now(),
    todo,
    completed: false,
    creationDate: Date.now(),
    completionDate: null
  };
};

export function todosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_INPUT:
      return { ...state, inputValue: action.payload };
    case ACTIONS.ADD_TODO:
      const addedTodoState = {
        ...state,
        todos: state.todos
          ? [createTodo(action.payload), ...state.todos]
          : [createTodo(action.payload)],
        inputValue: ''
      };
      writeLocalStorage(addedTodoState);
      return addedTodoState;
    case ACTIONS.DELETE_TODO:
      const removedTodoState = {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
      };
      writeLocalStorage(removedTodoState);
      return removedTodoState;
    case ACTIONS.TOGGLE_TODO:
      const toggledTodoState = {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed,
                creationDate: Date.now()
              };
            }
            return todo;
          })
        ]
      };
      writeLocalStorage(toggledTodoState);
      return toggledTodoState;
    case ACTIONS.SET_TODOS:
      return { ...readLocalStorage() };
    default:
      return state;
  }
}
