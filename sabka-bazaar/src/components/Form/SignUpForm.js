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
  passwordMatchError,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="First Name"
        type="text"
        required
        onChange={handleChange}
        id="firstName"
        name="firstName"
        value={firstName}
      />
      <TextInput
        label="Last Name"
        type="text"
        required
        onChange={handleChange}
        id="lastName"
        name="lastName"
        value={lastName}
      />
      <TextInput
        label="Email"
        type="email"
        required
        onChange={handleChange}
        id="email"
        name="email"
        value={email}
      />
      <TextInput
        label="Password"
        type="password"
        required
        onChange={handleChange}
        id="password"
        name="password"
        value={password}
      />
      <TextInput
        label="Confirm Password"
        type="password"
        required
        onChange={handleChange}
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
      />
      {passwordMatchError && (
        <div>
          <p>{passwordMatchError}</p>
        </div>
      )}
      <Button title="Signup" type="submit" style={{ width: "100%" }} />
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
  passwordMatchError: PropTypes.string,
};
