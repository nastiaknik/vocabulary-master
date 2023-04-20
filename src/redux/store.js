import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { wordsReducer } from './words/wordsSlice';
import { filterReducer } from './filter/filterSlice';
import { quizReducer } from './quizSlice';

const rootReducer = combineReducers({
  words: wordsReducer,
  filter: filterReducer,
  quiz: quizReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
