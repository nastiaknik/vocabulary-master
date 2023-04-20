import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWords } from 'redux/oparations';
import { selectKnownWords } from '../redux/words/selectors';
import { Quiz } from 'components/Quiz/Quiz';

export const Training = () => {
  const dispatch = useDispatch();
  const vocabulary = useSelector(selectKnownWords);

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
      <Quiz vocabulary={vocabulary} />
    </>
  );
};
