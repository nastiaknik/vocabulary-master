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
