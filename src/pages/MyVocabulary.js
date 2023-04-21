import { useSelector } from 'react-redux';
import { selectFilteredKnownWords } from 'redux/words/selectors';
import { Filter } from 'components/Filter/Filter';
import { WordList } from 'components/WordList/WordList';
import Loader from 'components/Skeleton';

const MyVocabulary = () => {
  const words = useSelector(selectFilteredKnownWords);
  const isLoading = useSelector(state => state.words.isLoading);

  return (
    <div>
      <h2 style={{ margin: '25px auto' }}>My Vocabulary</h2>
      <Filter />
      {isLoading && <Loader page="/vocabulary" />}
      <WordList words={words} page="vocabulary" />
    </div>
  );
};

export default MyVocabulary;
