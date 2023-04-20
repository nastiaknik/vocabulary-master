import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledButton } from './ModalAddWord.styled';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/oparations';

function ModalAddWord() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleAddWord = event => {
    event.preventDefault();
    const word = {
      engWord: event.currentTarget.engWord.value,
      translation: event.currentTarget.translation.value,
      isChecked: false,
    };

    dispatch(addWord(word));

    handleClose();
    event.currentTarget.reset();
  };

  return (
    <>
      <StyledButton variant="primary" type="button" onClick={handleShow}>
        Create word set
      </StyledButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title>Add word and its translation</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddWord}>
          <Form.Group
            controlId="exampleForm.ControlInput1"
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
                controlId="floatingEnglishWord"
                label="Word in English"
              >
                <Form.Control
                  name="engWord"
                  type="text"
                  placeholder="hello"
                  autoFocus
                  required
                />
              </FloatingLabel>
            </InputGroup>
            <InputGroup hasValidation>
              <FloatingLabel
                controlId="floatingTranslation"
                label="Translation"
              >
                <Form.Control
                  name="translation"
                  type="text"
                  placeholder="привіт"
                  required
                />
              </FloatingLabel>
            </InputGroup>
          </Form.Group>
          <Modal.Footer style={{ border: 'none' }}>
            <Button variant="secondary" onClick={handleClose} type="button">
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalAddWord;
