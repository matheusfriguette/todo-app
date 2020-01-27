import { createAction } from '@reduxjs/toolkit';
import v4 from 'uuid/v4';

import { TodosTypes } from './types';

export const addTodo = createAction(TodosTypes.ADD_TODO, (text: string) => {
  return {
    payload: {
      text,
      id: v4(),
      isDone: false,
      createdAt: new Date().toISOString(),
    },
  };
});

export const toggleTodo = createAction<string, TodosTypes.TOGGLE_TODO>(
  TodosTypes.TOGGLE_TODO,
);

export const removeTodo = createAction<string, TodosTypes.REMOVE_TODO>(
  TodosTypes.REMOVE_TODO,
);
