import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

export const EditIcon = styled(MdEdit)`
  font-size: 20px;
  color: black;
`;

export const EditBtn = styled.button`
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
    background-color: rgba(25, 133, 251, 0.08);

    > ${EditIcon} {
      color: #28c38a;
    }
  }
`;
