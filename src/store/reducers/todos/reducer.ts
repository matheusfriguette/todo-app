import { createReducer } from '@reduxjs/toolkit';

import { Todo } from './types';
import * as TodosActions from './actions';

const INITIAL_STATE: Todo[] = [];

const todos = createReducer(INITIAL_STATE, {
  [TodosActions.addTodo.type]: (state, action) => {
    const todo = action.payload;
    state.push(todo);
  },
  [TodosActions.toggleTodo.type]: (state, action) => {
    const todoId = action.payload;
    const todoIndex = state.findIndex((todo) => todo.id === todoId);
    state[todoIndex].isDone = !state[todoIndex].isDone;
  },
  [TodosActions.removeTodo.type]: (state, action) => {
    const todoId = action.payload;

    return state.filter((todo) => todo.id !== todoId);
  },
});

export default todos;
