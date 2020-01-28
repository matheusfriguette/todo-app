import React from 'react';
import { useDispatch } from 'react-redux';

import todos from '../store/ducks/todos';
import { Todo } from '../store/ducks/todos';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <label className="flex justify-between items-center">
      <div>
        <input
          type="checkbox"
          className="form-checkbox text-blue-600 text-xl"
          checked={todo.isDone}
          onChange={() => dispatch(todos.actions.toggleTodo(todo.id))}
        />
        <span className={`ml-2 ${todo.isDone && 'text-gray-600 line-through'}`}>
          {todo.text}
        </span>
      </div>
      <button
        type="button"
        className="text-gray-600 p-4 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
        onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
      >
        <svg className="w-4  fill-current" viewBox="0 0 24 24">
          <path d="M9 19a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm5-17v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22zm-3 4v16H5V6H3v18h18V6h-2z" />
        </svg>
      </button>
    </label>
  );
};

export default TodoItem;
