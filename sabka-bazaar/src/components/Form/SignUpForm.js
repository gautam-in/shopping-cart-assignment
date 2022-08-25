import { TextInput } from "../Text-Input/TextInput";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";

export const SignUpForm = ({
  handleSubmit,
  handleChange,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="First Name"
        type="text"
        required
        onChange={handleChange}
        name="firstName"
        value={firstName}
      />
      <TextInput
        label="Last Name"
        type="text"
        required
        onChange={handleChange}
        name="lastName"
        value={lastName}
      />
      <TextInput
        label="Email"
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />
      <TextInput
        label="Password"
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />
      <TextInput
        label="Confirm Password"
        type="confirmPassword"
        required
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword}
      />
      <Button title="Login" type="submit" style={{ width: "100%" }} />
    </form>
  );
};
SignUpForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};
