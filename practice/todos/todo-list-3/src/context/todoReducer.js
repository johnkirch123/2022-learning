import { ACTIONS } from './todoActions';

export const initialState = {
  todos: [
    {
      id: 1,
      todo: 'Walk the dog',
      completed: false,
      creationDate: Date.now(),
      completionDate: null
    },
    {
      id: 2,
      todo: 'Go to the movies',
      completed: false,
      creationDate: Date.now(),
      completionDate: null
    },
    {
      id: 3,
      todo: 'Go to the Gym',
      completed: false,
      creationDate: Date.now(),
      completionDate: null
    }
  ],
  inputValue: ''
};

const addTodo = (todo) => {
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
      return {
        ...state,
        todos: [addTodo(action.payload), ...state.todos]
      };
    default:
      return state;
  }
}
