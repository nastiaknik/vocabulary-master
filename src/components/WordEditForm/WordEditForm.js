import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWord } from '../../redux/oparations';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectWords } from 'redux/words/selectors';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditIcon, EditBtn } from './WordEditForm.styled';

export function WordEditForm({ word }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const items = useSelector(selectWords);

  const handleEditWord = event => {
    event.preventDefault();
    const engWord = event.currentTarget.engWord.value;
    const translation = event.currentTarget.translation.value;

    const itemsWithoutWordToEdit = items.filter(item => item !== word);

    const isEngWordExist = itemsWithoutWordToEdit.some(
      word => word.engWord === engWord
    );
    if (isEngWordExist) {
      Report.failure(`${engWord} is already in the list`);
      return;
    }

    if (word.engWord === engWord && word.translation === translation) {
      Report.warning(
        'Attention!',
        `You did no change to word ${word.engWord}!`
      );
    }

    dispatch(editWord({ ...word, engWord, translation }));
    event.currentTarget.reset();
    handleClose();
  };

  return (
    <>
      <EditBtn type="button" onClick={handleShow}>
        <EditIcon />
      </EditBtn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title>Edit the word and/or its translation</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditWord}>
          <Form.Group
            controlId="wordToEdit"
            style={{
              padding: '10px',
              display: 'flex',
              displayWrap: 'nowrap',
              gap: '5px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InputGroup hasValidation>
              <FloatingLabel
                controlId="floatingEnglishWordToEdit"
                label="Edit the English word"
              >
                <Form.Control
                  type="text"
                  name="engWord"
                  defaultValue={word.engWord}
                  placeholder="hello"
                  autoFocus
                  required
                />
              </FloatingLabel>
            </InputGroup>
            <InputGroup hasValidation>
              <FloatingLabel
                label="Translation"
                controlId="floatingTranslationOfWordToEdit"
              >
                <Form.Control
                  type="text"
                  name="translation"
                  defaultValue={word.translation}
                  required
                  placeholder="hola"
                />
              </FloatingLabel>
            </InputGroup>
          </Form.Group>
          <Modal.Footer style={{ border: 'none' }}>
            <Button variant="secondary" onClick={handleClose} type="button">
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
