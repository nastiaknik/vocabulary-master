import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ label, onClick, type }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
