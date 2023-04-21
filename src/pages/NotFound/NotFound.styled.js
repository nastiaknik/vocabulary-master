import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  width: 102px;
  display: block;
  margin: 20px auto 0px;
  text-decoration: none;
  line-height: 1.43;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(34, 41, 67, 0.14);
  box-sizing: border-box;
  cursor: pointer;
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  padding: 8px 16px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;

  background-color: #1873d6;
  border-color: #1873d6;
  color: #fff;

  :hover,
  :focus {
    background-color: #0d5cb9;
    border-color: #0d5cb9;
    color: white;
  }
`;
