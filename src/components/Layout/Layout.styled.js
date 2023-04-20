import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-height: 100vh;
  padding-bottom: 24px;
  text-align: center;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 /* 16px */;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 550;
  font-size: 17px;
  text-align: start;
  text-decoration: none;
  color: black;
  border-radius: 20px;

  &.active {
    color: white;
    background-color: #28c38a;

    :hover,
    :focus {
      color: white;
    }
  }

  :hover,
  :focus {
    color: #28c38a;
  }
`;

export const Main = styled.main`
  padding-top: 70px;
  width: 100%;
`;
