import { combineReducers } from '@reduxjs/toolkit';

import todos from './ducks/todos';

const rootReducer = combineReducers({
  todos: todos.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
