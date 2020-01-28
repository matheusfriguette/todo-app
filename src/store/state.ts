import { CombinedState } from '@reduxjs/toolkit';

import { Todo } from './ducks/todos';

export const loadState = (): CombinedState<{
  todos: Todo[];
}> => {
  const serializedState = localStorage.getItem('state');

  if (serializedState === null) {
    return {
      todos: [],
    };
  }

  return JSON.parse(serializedState);
};

export const saveState = (
  state: CombinedState<{
    todos: Todo[];
  }>,
): void => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem('state', serializedState);
};
