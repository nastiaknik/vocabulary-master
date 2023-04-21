import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchWords,
  deleteWord,
  addWord,
  checkWord,
  editWord,
} from '../oparations';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWords.fulfilled, (state, action) => {
        return {
          items: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.error = null;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(checkWord.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.error = null;
      })
      .addCase(editWord.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          editWord.pending,
          checkWord.pending,
          addWord.pending,
          deleteWord.pending,
          fetchWords.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          editWord.rejected,
          checkWord.rejected,
          addWord.rejected,
          deleteWord.rejected,
          fetchWords.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const wordsReducer = wordsSlice.reducer;
