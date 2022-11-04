import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import createRoot from '@reduxjs/toolkit';
import App from './App';

import reactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  reactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, div);
});