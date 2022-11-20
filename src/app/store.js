import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer  from './redditSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer
  }   
});

