import { Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Loader from 'components/Skeleton';
import { Container, Header, Nav, StyledNavLink, Main } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Nav>
          <StyledNavLink to="/">Dictionary</StyledNavLink>
          <StyledNavLink to="/training">Training</StyledNavLink>
          <StyledNavLink to="/vocabulary">My Vocabulary</StyledNavLink>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader page={location.pathname} />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
