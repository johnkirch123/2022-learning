import { ACTIONS } from './todoActions';

export const initialState = {
  todos: [
    {
      id: 1,
      text: 'Walk the dog',
      completed: false,
      editMode: false
    },
    {
      id: 2,
      text: 'Go grocery shopping',
      completed: true,
      editMode: false
    },
    {
      id: 3,
      text: 'Feed the horses',
      completed: false,
      editMode: false
    },
    {
      id: 4,
      text: 'Go to the gym',
      completed: true,
      editMode: false
    }
  ],
  text: '',
  editMode: false
};

const addTodo = (text) => {
  return {
    id: Date.now(),
    text,
    completed: false,
    editMode: false
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
    case ACTIONS.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              editMode: !todo.editMode
            };
          }
          return todo;
        })
      };
    case ACTIONS.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
              editMode: !todo.editMode,
              completed: false
            };
          }
          return todo;
        })
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };
    case ACTIONS.TEXT_INPUT:
      return {
        ...state,
        text: action.payload.text
      };
    case ACTIONS.TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
