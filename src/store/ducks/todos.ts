import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import v4 from 'uuid/v4';

export type Todo = {
  id: string;
  text: string;
  isDone: boolean;
  createdAt: Date;
};

const initialState: Todo[] = [];

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      prepare: (text: string) => {
        return {
          payload: {
            text,
            id: v4(),
            isDone: false,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer: (state, action) => {
        const todo = action.payload;
        state.push(todo);
      },
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      const todoIndex = state.findIndex((todo) => todo.id === todoId);
      state[todoIndex].isDone = !state[todoIndex].isDone;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
  },
});

export default todos;
