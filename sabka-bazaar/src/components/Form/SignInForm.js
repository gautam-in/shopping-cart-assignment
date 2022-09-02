import { TextInput } from "../Text-Input/TextInput";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";

export const SignInForm = ({ handleSubmit, handleChange, email, password }) => {
  return (
    <form onSubmit={handleSubmit}>
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
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
        required
        onChange={handleChange}
        id="password"
        name="password"
        value={password}
      />
      <Button title="Login" style={{ width: "100%" }} />
    </form>
  );
};
SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};
