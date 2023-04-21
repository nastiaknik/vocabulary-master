import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;

export const selectFilterValue = state => state.filter;

export const selectKnownWords = state =>
  state.words.items.filter(word => word.isChecked);

export const selectUnknownWords = state =>
  state.words.items.filter(word => !word.isChecked);

export const selectFilteredUnknownWords = createSelector(
  [selectUnknownWords, selectFilterValue],
  (words, value) => {
    return words.filter(word => {
      return word.engWord.toLowerCase().includes(value.toLowerCase().trim());
    });
  }
);

export const selectFilteredKnownWords = createSelector(
  [selectKnownWords, selectFilterValue],
  (words, value) => {
    return words.filter(word => {
      return word.engWord.toLowerCase().includes(value.toLowerCase().trim());
    });
  }
);

export const selectUnknownEngWords = createSelector(
  [selectUnknownWords],
  words => {
    return words.map(word => word.engWord);
  }
);

export const selectIsLoading = state => state.words.isLoading;
