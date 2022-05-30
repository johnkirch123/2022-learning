import { ACTIONS } from './todoActions';

export const initialState = {
  todos: [
    {
      id: 1,
      text: 'Walk the dog',
      completed: false
    },
    {
      id: 2,
      text: 'Go grocery shopping',
      completed: true
    },
    {
      id: 3,
      text: 'Feed the horses',
      completed: false
    },
    {
      id: 4,
      text: 'Go to the gym',
      completed: true
    }
  ]
};

const addTodo = (text) => {
  console.log('creating new todo');
  return {
    id: Date.now(),
    text: text,
    completed: false
  };
};

export const todosReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, addTodo(action.payload.text)],
        text: ''
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};
