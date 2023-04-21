import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWords } from 'redux/oparations';
import { selectFilteredKnownWords } from 'redux/words/selectors';
import { Filter } from 'components/Filter';
import { WordList } from 'components/WordList/WordList';
import Loader from 'components/Skeleton';
import { selectIsLoading } from 'redux/words/selectors';

const MyVocabulary = () => {
  const words = useSelector(selectFilteredKnownWords);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader page="/vocabulary" />
      ) : (
        <>
          <h2 style={{ margin: '25px auto' }}>My Vocabulary</h2>
          <Filter />
          <WordList words={words} page="vocabulary" />
          {!words && (
            <p style={{ padding: '10px', fontSize: '18px' }}>
              No words added to your dictionary yet.
            </p>
          )}
        </>
      )}
    </>
  );
};

export default MyVocabulary;
