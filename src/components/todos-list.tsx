import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/root-reducer';
import { Todo } from '../store/ducks/todos';

import TodoItem from './todo-item';

const TodosList: React.FC = () => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos);

  return (
    <ul className="flex flex-col mt-8">
      {todos.map((todo) => (
        <li key={todo.id} className="border-t py-4">
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
