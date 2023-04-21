import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startQuiz,
  loadQuestions,
  answerQuestion,
  finishQuiz,
  resetQuiz,
} from '../../redux/quizSlice';
import { checkWord } from 'redux/oparations';
import { Report } from 'notiflix';
import { Option } from 'components/Option/Option';
import Button from 'components/Button/Button';
/* import Loader from 'components/Skeleton'; */
import { OptionList, Result, Score } from './Quiz.styled';

export const Quiz = ({ vocabulary, isLoading }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionData, setCurrentQuestionData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correct, setCorrect] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetQuiz());
      setCurrentQuestion(0);
      setCurrentQuestionData(null);
      setSelectedOption(null);
      setCorrect(null);
    };
  }, [dispatch]);

  const { quizStarted, quizComplete, score } = useSelector(state => state.quiz);

  const optionsMap = {};
  vocabulary.forEach(word => {
    const options = vocabulary
      .filter(w => w.id !== word.id)
      .map(w => w.translation);
    const correctAnswer = word.translation;
    const shuffledOptions = shuffle(options).slice(0, 3);
    const correctAnswerPosition = Math.floor(Math.random() * 3);
    shuffledOptions.splice(correctAnswerPosition, 0, correctAnswer);
    optionsMap[word.id] = shuffledOptions;
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const quizQuestions = vocabulary
    .filter(word => word.isChecked)
    .map(word => {
      return {
        id: word.id,
        question: `What is the translation of the word "${word.engWord}"?`,
        options: optionsMap[word.id],
        correctAnswer: word.translation,
        selectedOption: null,
      };
    })
    .slice(0, 10);

  const handleStartQuiz = () => {
    if (vocabulary.length < 4 && !isLoading) {
      Report.failure('Oops!', 'Add at least 4 words to start a quiz.');
      return;
    }
    dispatch(resetQuiz());
    dispatch(startQuiz(quizQuestions));
    dispatch(loadQuestions(quizQuestions));

    setCurrentQuestionData(quizQuestions[0]);
  };

  const handleNextQuestionClick = () => {
    setSelectedOption(null);
    setCorrect(null);

    if (currentQuestion === quizQuestions.length - 1) {
      dispatch(finishQuiz());
      return;
    }
    const nextQuestionIndex = currentQuestion + 1;
    const nextQuestion = quizQuestions[nextQuestionIndex];

    dispatch(loadQuestions(quizQuestions));
    setCurrentQuestionData(nextQuestion);
    setCurrentQuestion(nextQuestionIndex);
  };

  const handleAnswerClick = (option, isCorrect) => {
    setSelectedOption(option);
    setCorrect(isCorrect);

    const updatedQuestions = [...quizQuestions];
    const updatedQuestion = { ...updatedQuestions[currentQuestion] };

    if (currentQuestion < quizQuestions.length) {
      updatedQuestion.selectedOption = option;
      updatedQuestion.options = quizQuestions[currentQuestion].options;
      updatedQuestions[currentQuestion] = updatedQuestion;
      console.log(updatedQuestion);
      dispatch(answerQuestion(updatedQuestion));
    } else {
      dispatch(finishQuiz());
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestion + 1;
      if (nextQuestionIndex === quizQuestions.length) {
        dispatch(finishQuiz());
        setCurrentQuestion(null);
        setCurrentQuestionData(null);
      } else {
        setCurrentQuestion(nextQuestionIndex);
        setCurrentQuestionData(updatedQuestions[nextQuestionIndex]);
        dispatch(loadQuestions(updatedQuestions));
      }
      setSelectedOption(null);
      setCorrect(null);
    }, 1000);

    const updatedWord = vocabulary.find(word => word.id === updatedQuestion.id);

    if (isCorrect) {
      dispatch(checkWord({ ...updatedWord, isChecked: true }));
    } else if (!isCorrect) {
      dispatch(checkWord({ ...updatedWord, isChecked: false }));
    }
  };

  const handleTryAgain = () => {
    if (vocabulary.length < 4 && !isLoading) {
      Report.failure('Oops!', 'Add at least 4 words to start a quiz.');
      return;
    }

    setCurrentQuestion(0);

    const resetQuestions = quizQuestions.map(question => ({
      ...question,
      selectedOption: null,
    }));

    dispatch(resetQuiz());
    dispatch(startQuiz(resetQuestions));
    dispatch(loadQuestions(resetQuestions));

    setCurrentQuestionData(resetQuestions[0]);
  };

  return (
    <>
      {/*  {isLoading ? (
        <Loader page="/training" />
      ) : ( */}
      <>
        <div>
          {!quizStarted && (
            <Button
              type="button"
              onClick={handleStartQuiz}
              label="Start Quiz"
              disabled={isLoading}
            />
          )}

          {currentQuestionData && quizStarted && !quizComplete && (
            <>
              <h2>{currentQuestionData.question}</h2>
              <OptionList>
                {currentQuestionData.options.map(option => (
                  <Option
                    option={option}
                    key={option}
                    handleAnswerClick={handleAnswerClick}
                    question={currentQuestionData}
                    selectedOption={selectedOption}
                    correct={correct}
                  />
                ))}
              </OptionList>
              <Button
                type="button"
                onClick={handleNextQuestionClick}
                label="Next Question"
              />
            </>
          )}
          {quizComplete && (
            <>
              <Result>Your score:</Result>
              <Score>
                {/* Your score is: */} {score} / {quizQuestions.length}
              </Score>
              {/* <p>{((score / quizQuestions.length) * 100).toFixed(0)}%</p> */}
              <Button
                type="button"
                onClick={handleTryAgain}
                label="Try Again"
              />
            </>
          )}
        </div>
      </>
      {/*   )} */}
    </>
  );
};
