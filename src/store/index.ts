import { configureStore } from '@reduxjs/toolkit';

import { loadState, saveState } from './state';
import rootReducer from './root-reducer';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
