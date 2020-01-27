import { configureStore } from '@reduxjs/toolkit';

import { loadState, saveState } from './state';
import rootReducer from './reducers/root-reducer';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
