import PropTypes from 'prop-types';

import { ButtonWrapper } from 'styles/button.styled';

const CustomButton = (props) => {
  const { name, onClick } = props;

  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {name}
    </ButtonWrapper>
  );
};

CustomButton.prototype = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
};

export default CustomButton;
