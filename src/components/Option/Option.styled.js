import styled from 'styled-components';

export const OptionButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee;
  }

  &:focus {
    outline: none;
    /* box-shadow: 0 0 0 2px #ccc; */
  }

  &.correct {
    border-color: #0f0;
    background-color: #cfc;
    color: #080;
  }

  &.incorrect {
    border-color: #f00;
    background-color: #fcc;
    color: #800;
  }
`;
