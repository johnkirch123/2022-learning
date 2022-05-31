import { ACTIONS } from './todoActions';

export const initialState = {
  todos: [
    { id: 1, todo: 'Walk the dog', completed: false },
    { id: 2, todo: 'Go to the movies', completed: false },
    { id: 3, todo: 'Go to the Gym', completed: false }
  ],
  inputValue: ''
};

export function todosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_INPUT:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}
