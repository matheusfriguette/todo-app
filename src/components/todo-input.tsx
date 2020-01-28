import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../store/ducks/todos';

const TodoInput: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const dispatch = useDispatch();

  const submitTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(todos.actions.addTodo(todoText));
    setTodoText('');
  };

  return (
    <form className="mt-4 flex" onSubmit={submitTodo}>
      <input
        className="flex-grow bg-gray-100 border rounded-l px-4 py-2 focus:border-blue-600 focus:outline-none"
        type="text"
        placeholder="What do you need to do?"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 rounded-r px-4 py-2">
        <svg className="w-4 text-white fill-current" viewBox="0 0 24 24">
          <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
        </svg>
      </button>
    </form>
  );
};

export default TodoInput;
