import { useContext } from 'react';
import TodoContext from '../../context/todoContext';
import { ACTIONS } from '../../context/todoActions';
import './index.css';

const TodoInput = () => {
  const {
    state: { inputValue },
    dispatch
  } = useContext(TodoContext);
  console.log(inputValue);
  return (
    <form className='todo__form'>
      <input
        type='text'
        name='todo'
        value={inputValue}
        onChange={(e) =>
          dispatch({ type: ACTIONS.UPDATE_INPUT, payload: e.target.value })
        }
      />
      <button
        className='todo__button'
        onClick={() =>
          dispatch({
            type: ACTIONS.ADD_TODO,
            payload: inputValue
          })
        }
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
