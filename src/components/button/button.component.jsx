import {
  CustomButton
} from './button.styles';

const Button = ({ children, ...otherProps }) => {
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
