import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord } from 'redux/oparations';
import { Report } from 'notiflix';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledButton } from './AddWordForm.styled';
import { selectWords } from 'redux/words/selectors';

export const AddWordForm = () => {
  const [show, setShow] = useState(false);
  const [wordCount, setWordCount] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const items = useSelector(selectWords);

  const handleAddWord = event => {
    event.preventDefault();

    const words = [];

    for (let i = 0; i < wordCount; i += 1) {
      const engWord = event.currentTarget[`engWord${i}`].value;
      const translation = event.currentTarget[`translation${i}`].value;

      const alreadyExists = items.some(item => item.engWord === engWord);

      if (alreadyExists) {
        return Report.warning('The english word already added.', '');
      }

      if (engWord && translation) {
        words.push({
          engWord,
          translation,
          isChecked: false,
        });
      }
    }

    if (words.length > 0) {
      words.forEach(word => dispatch(addWord(word)));
      handleClose();
      event.currentTarget.reset();
      setWordCount(1);
    }
  };

  const handleAddMore = () => {
    setWordCount(wordCount + 1);
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
          {[...Array(wordCount)].map((_, index) => (
            <Form.Group
              key={index}
              controlId={`word${index}`}
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
                  controlId={`floatingEnglishWord${index}`}
                  label="Word in English"
                >
                  <Form.Control
                    name={`engWord${index}`}
                    type="text"
                    placeholder="hello"
                    autoFocus={index === 0}
                    required
                  />
                </FloatingLabel>
              </InputGroup>
              <InputGroup hasValidation>
                <FloatingLabel
                  controlId={`floatingTranslation${index}`}
                  label="Translation"
                >
                  <Form.Control
                    name={`translation${index}`}
                    type="text"
                    placeholder="привіт"
                    required
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          ))}
          <Modal.Footer style={{ border: 'none' }}>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddMore}
              style={{ margin: '0 auto 0' }}
            >
              Add more
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              type="button"
              style={{ margin: '5px' }}
            >
              Close
            </Button>
            <Button variant="primary" type="submit" style={{ margin: '5px' }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
