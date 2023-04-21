import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

Option.propTypes = {
  option: PropTypes.string.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    correctAnswer: PropTypes.string.isRequired,
    selectedOption: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
  }).isRequired,
  selectedOption: PropTypes.string,
  correct: PropTypes.bool,
};
