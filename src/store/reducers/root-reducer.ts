import { combineReducers } from '@reduxjs/toolkit';

import todos from './todos/reducer';

const rootReducer = combineReducers({
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
