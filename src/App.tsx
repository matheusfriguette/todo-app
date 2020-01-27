import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header';
import TodoInput from './components/todo-input';
import TodosList from './components/todos-list';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="container mx-auto px-2">
          <div className="flex -mx-2">
            <div className="w-1/2 mx-auto px-2">
              <div className="bg-white p-8 border">
                <h1 className="font-semibold text-xl">To-dos</h1>
                <TodoInput />
                <TodosList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
