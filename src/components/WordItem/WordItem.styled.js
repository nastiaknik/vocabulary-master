import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

export const Item = styled.li`
  align-items: center;
  justify-content: center;
  width: fit-content;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;

  :not(:last-of-type) {
    border-bottom: 1px solid #e6e9ee;
  }
`;

export const EngWord = styled.p`
  color: #2582e7;
  padding: 0 6px 5px 0;
  margin: 0;
  border-radius: 4px;
  display: inline-block;
  font-weight: 600;
  transition: background-color 0.2s ease;
`;

export const Translation = styled.p`
  margin: 0;
  padding: 0 0 5px 6px;
`;

export const Word = styled.div`
  text-align: start;
  background-color: #fff;
  border-radius: 4px;
  display: inline-flex;
  padding: 8px;
  position: relative;
  width: 440px;
  cursor: pointer;

  :hover {
    background-color: rgba(25, 133, 251, 0.08);
  }
`;

export const Icon = styled(MdDelete)`
  font-size: 20px;
  color: black;
`;

export const DeleteBtn = styled.button`
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 32px;
  justify-content: center;
  transition: background-color 0.2s ease;
  width: 32px;
  background-color: #fff;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #fff2f0;

    > ${Icon} {
      color: #ed593b;
    }
  }
`;
