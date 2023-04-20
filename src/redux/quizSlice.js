import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizStarted: false,
  quizQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action) => {
      const vocabulary = action.payload;

      const quizQuestions = vocabulary
        .filter(word => word.isChecked)
        .map(word => {
          const options = [word.translation];
          while (options.length < 4) {
            const randomOption =
              vocabulary[Math.floor(Math.random() * vocabulary.length)]
                .translation;
            if (!options.includes(randomOption)) {
              options.push(randomOption);
            }
          }
          return {
            id: word.id,
            question: `What is the translation of the word "${word.engWord}"?`,
            options,
            correctAnswer: word.translation,
            selectedOption: null,
          };
        });

      return {
        ...state,
        quizStarted: true,
        quizQuestions,
      };
    },
    loadQuestions: (state, action) => {
      console.log(state.quizQuestions);
      return {
        ...state,
        quizQuestions: action.payload,
      };
    },
    answerQuestion: (state, action) => {
      const updatedQuestion = action.payload;

      const answerIndex = updatedQuestion.options.indexOf(
        updatedQuestion.selectedOption
      );
      const correctAnswerIndex = updatedQuestion.options.indexOf(
        updatedQuestion.correctAnswer
      );
      const isCorrect = answerIndex === correctAnswerIndex;
      const updatedQuestions = state.quizQuestions.map((question, index) => {
        if (index === state.currentQuestionIndex) {
          return {
            ...updatedQuestion,
            selectedOption: answerIndex,
          };
        }
        return question;
      });
      console.log(isCorrect);
      const score = isCorrect ? state.score + 1 : state.score;
      console.log(score);
      if (state.currentQuestionIndex === state.quizQuestions.length - 1) {
        return {
          ...state,
          score,
          quizQuestions: updatedQuestions,
        };
      } else {
        return {
          ...state,
          score,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          quizQuestions: updatedQuestions,
        };
      }
    },
    finishQuiz: state => {
      return {
        ...state,
        quizComplete: true,
      };
    },
    resetQuiz: state => {
      return {
        ...state,
        quizStarted: false,
        quizQuestions: [],
        currentQuestionIndex: 0,
        score: 0,
        quizComplete: false,
      };
    },
  },
});

export const {
  startQuiz,
  loadQuestions,
  answerQuestion,
  finishQuiz,
  resetQuiz,
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
