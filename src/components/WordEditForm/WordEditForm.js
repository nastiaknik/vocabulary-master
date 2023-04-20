import { useState } from 'react';
import { useDispatch /* , useSelector */ } from 'react-redux';
import { editWord } from 'redux/operations';
/* import { Report } from 'notiflix/build/notiflix-report-aio';
 */ /* import { selectWords } from 'redux/words/selectors';*/
/* import {Button,
  ButtonWrapper,
  StyledForm,
  StyledTextField,
} from './WordEditForm.styled'; */

export function WordEditForm({ words, handleClose }) {
  const dispatch = useDispatch();
  /*   const wordsToCheck = useSelector(selectWords);
   */
  const [word, setWord] = useState(words);

  const handleChange = evt => {
    setWord(prev => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleEditWord = event => {
    event.preventDefault();
    /* const engWord = evt.currentTarget.engWord.value; */

    /* const isEngWordExist = wordsToCheck.some(word => word.engWord === engWord);
    if (isEngWordExist) {
     Report.failure(`${engWord} is already in the list`);
      return;
    } */

    dispatch(editWord(word));
    event.currentTarget.reset();
    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleEditWord}>
        <div>
          <input
            id="engWord"
            label="Word in English"
            variant="outlined"
            type="text"
            name="engWord"
            value={word.engWord}
            onChange={handleChange}
          />
          <input
            id="engWord"
            label="Translation"
            variant="outlined"
            type="text"
            name="ukrWord"
            value={word.ukrWord}
            onChange={handleChange}
          />
        </div>
        <div>
          <btn type="submit">Save</btn>
          <btn type="button" onClick={handleClose}>
            Cancel
          </btn>
        </div>
      </form>
    </div>
  );
}
