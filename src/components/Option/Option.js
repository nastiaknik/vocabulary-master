import { useState, useEffect } from 'react';
import { OptionButton } from './Option.styled';

export const Option = ({
  option,
  handleAnswerClick,
  question,
  selectedOption,
  correct,
}) => {
  const [answerStatus, setAnswerStatus] = useState(null);

  const isSelected = option === selectedOption;
  const isCorrect = option === question.correctAnswer;

  useEffect(() => {
    setAnswerStatus(null);
  }, [question]);

  const handleClick = () => {
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    handleAnswerClick(option, isCorrect);
  };

  return (
    <OptionButton
      type="button"
      onClick={handleClick}
      disabled={
        selectedOption !== null && !isSelected && selectedOption !== option
      }
      className={answerStatus}
    >
      {option}
      {/* {isSelected && correct !== null && (isCorrect ? '✅' : '❌')} */}
    </OptionButton>
  );
};
