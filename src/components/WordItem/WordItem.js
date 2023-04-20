import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { FormControlLabel, Checkbox } from '@mui/material';
import { deleteWord, checkWord } from 'redux/oparations';
import {
  Item,
  Word,
  EngWord,
  Translation,
  DeleteBtn,
  Icon,
} from './WordItem.styled';

export const WordItem = ({ word }) => {
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
    dispatch(checkWord({ ...word, isChecked: !isChecked }));
    setIsChecked(prevState => !prevState);
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
      <DeleteBtn type="button" onClick={() => handleDelete(word.id)}>
        <Icon />
      </DeleteBtn>
      {/*       <button type="button">Edit</button>
       */}
    </Item>
  );
};
