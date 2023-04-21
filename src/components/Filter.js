import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';
import { setFilterValue } from 'redux/filter/filterSlice';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <>
      <InputGroup style={{ width: '300px', margin: ' 0 auto' }}>
        <Form.Control
          aria-label="Filter"
          onChange={handleChange}
          value={filterValue}
          placeholder="Search words"
        />
      </InputGroup>
    </>
  );
};
