import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWords } from 'redux/oparations';
import { WordItem } from 'components/WordItem/WordItem';
import { List } from './WordList.styled';

export const WordList = ({ words, page }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <List>
      {words.map(word => (
        <WordItem word={word} key={word.id} page={page} />
      ))}
    </List>
  );
};
