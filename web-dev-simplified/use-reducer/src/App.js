import React, { useReducer } from 'react';
import Todo from './components/Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toogle-todo',
  DELETE_TODO: 'delete-todo',
  UPDATE_INPUT: 'update-input'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, newTodo(action.payload)],
        name: ''
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, complete: !todo.complete };
            }
            return todo;
          })
        ]
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
      };
    case ACTIONS.UPDATE_INPUT:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [], name: '' });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: state.name });
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.UPDATE_INPUT,
              payload: e.target.value
            })
          }
        />
      </form>
      {state.todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
