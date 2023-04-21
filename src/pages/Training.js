import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWords } from 'redux/oparations';
import { selectKnownWords, selectIsLoading } from '../redux/words/selectors';
import { Quiz } from 'components/Quiz/Quiz';

const Training = () => {
  const dispatch = useDispatch();
  const vocabulary = useSelector(selectKnownWords);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <>
      <h2 style={{ margin: '25px auto' }}>
        {/* Choose the mode of training */}Training
      </h2>
      <Quiz vocabulary={vocabulary} isLoading={isLoading} />
    </>
  );
};

export default Training;
