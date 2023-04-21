import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'redux/oparations';
import { selectFilteredUnknownWords } from 'redux/words/selectors';
import { WordList } from 'components/WordList/WordList';
import { AddWordForm } from 'components/AddWordForm/AddWordForm';
import { Filter } from 'components/Filter';
import Loader from 'components/Skeleton';
import { selectIsLoading } from 'redux/words/selectors';

const Dictionary = () => {
  const words = useSelector(selectFilteredUnknownWords);
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
        <Loader page="/" />
      ) : (
        <>
          <h2 style={{ margin: '25px auto' }}>My dictionary</h2>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              margin: '0 auto',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'fit-content',
            }}
          >
            <AddWordForm />
            <Filter />
          </div>
          <WordList words={words} page="dictionary" />
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

export default Dictionary;
