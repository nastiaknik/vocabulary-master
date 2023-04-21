import PropTypes from 'prop-types';
import { WordItem } from 'components/WordItem/WordItem';
import { List } from './WordList.styled';

export const WordList = ({ words, page }) => {
  return (
    <List>
      {words.map(word => (
        <WordItem word={word} key={word.id} page={page} />
      ))}
    </List>
  );
};

WordList.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      engWord: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  page: PropTypes.string.isRequired,
};
