import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import debounce from 'lodash/debounce';
import App from './App';
import rootReducer from './reducers';
import './index.scss';

export const LOCALSTORAGE_KEY = 'entries';

const initialState = {};

const store = createStore(rootReducer, initialState, devToolsEnhancer());

const saveData = debounce(() => {
  const state = store.getState();
  const entries = state.entries;
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.error(`Can't save to localStorage`);
  }
}, 500);

store.subscribe(saveData);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
