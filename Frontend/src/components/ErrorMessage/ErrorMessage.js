import PropTypes from 'prop-types';

const ErrorMessage = ({type, minLength, maxLength, field}) => {
  const errorMessage = () => {
    switch (type) {
      case `required`:
        return `Please enter your ${field}.`;
      case `pattern`:
        return `Please enter valid ${field}.`;
      case `minLength`:
        return `Your ${field} must be between ${minLength} to ${maxLength} characters.`;
      case `maxLength`:
        return `Your ${field} must be between ${minLength} to ${maxLength} characters.`;
      default:
        return null;
    }
  };
  return <span>{errorMessage()}</span>;
};

ErrorMessage.propTypes = {
  type: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
  field: PropTypes.string.isRequired,
};

export default ErrorMessage;
