import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWords } from 'redux/oparations';
import { selectKnownWords } from '../redux/words/selectors';
import { Quiz } from 'components/Quiz/Quiz';
import Loader from 'components/Skeleton';

const Training = () => {
  const dispatch = useDispatch();
  const vocabulary = useSelector(selectKnownWords);

  const isLoading = useSelector(state => state.words.isLoading);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader page="/vocabulary" />}

      <h2 style={{ margin: '25px auto' }}>
        {/* Choose the mode of training */}Training
      </h2>
      <Quiz vocabulary={vocabulary} />
      {!vocabulary && (
        <p style={{ padding: '10px', fontSize: '18px' }}>
          No words added to your vocabulary yet.
        </p>
      )}
    </>
  );
};

export default Training;
