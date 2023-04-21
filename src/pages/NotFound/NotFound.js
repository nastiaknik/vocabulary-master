import { StyledNavLink } from './NotFound.styled';
import Page404 from './404-page.png';

const NotFound = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <img
        src={Page404}
        alt="404 error, you underestimate the power of dark side"
        width="548"
        height="372"
      />
      <StyledNavLink to="/">Go home</StyledNavLink>
    </div>
  );
};

export default NotFound;
