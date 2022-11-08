import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, div);
});