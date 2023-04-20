import { useSelector } from 'react-redux';
import { selectFilteredKnownWords } from 'redux/words/selectors';
import { Filter } from 'components/Filter/Filter';
import { WordList } from 'components/WordList/WordList';

export const MyVocabulary = () => {
  const words = useSelector(selectFilteredKnownWords);

  return (
    <div>
      <h2 style={{ margin: '25px auto' }}>My Vocabulary</h2>
      <Filter />
      <WordList words={words} />
    </div>
  );
};
