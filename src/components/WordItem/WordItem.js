import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord, checkWord } from 'redux/oparations';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { FormControlLabel, Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import { WordEditForm } from 'components/WordEditForm/WordEditForm';
import {
  Item,
  Word,
  EngWord,
  Translation,
  DeleteBtn,
  DeleteIcon,
} from './WordItem.styled';

export const WordItem = ({ word, page }) => {
  const [isChecked, setIsChecked] = useState(word.isChecked);
  const dispatch = useDispatch();

  const handleDelete = id => {
    Confirm.show(
      'Confirm removal of word',
      'Are you sure you want to delete this word from your dictionary?',
      'Remove',
      'Cancel',
      () => {
        dispatch(deleteWord(id));
      },
      () => {
        return;
      }
    );
  };

  const toggleChecked = () => {
    if (page === 'dictionary') {
      Confirm.show(
        'You know the word?',
        'Are you sure you want to move the word to your vocabulary?',
        'Move',
        'Cancel',
        () => {
          dispatch(checkWord({ ...word, isChecked: !isChecked }));
          setIsChecked(prevState => !prevState);
        },
        () => {
          return;
        }
      );
    } else if (page === 'vocabulary') {
      Confirm.show(
        "You don't know the word?",
        'Are you sure you want to move the word to your dictionary?',
        'Move',
        'Cancel',
        () => {
          dispatch(checkWord({ ...word, isChecked: !isChecked }));
          setIsChecked(prevState => !prevState);
        },
        () => {
          return;
        }
      );
    } else {
      return;
    }
  };

  /*   const openEditFormModal = () => {};
   */
  return (
    <Item>
      <FormControlLabel
        checked={isChecked}
        control={<Checkbox />}
        label=""
        onClick={toggleChecked}
      />
      <Word>
        <EngWord>{word.engWord}</EngWord>—
        <Translation>{word.translation}</Translation>
      </Word>
      <WordEditForm word={word} />
      <DeleteBtn type="button" onClick={() => handleDelete(word.id)}>
        <DeleteIcon />
      </DeleteBtn>
    </Item>
  );
};

WordItem.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.string.isRequired,
    engWord: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
  }),
};
