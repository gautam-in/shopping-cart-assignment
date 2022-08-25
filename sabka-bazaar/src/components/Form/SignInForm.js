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
      <Button title="Login" type="submit" style={{ width: "100%" }} />
    </form>
  );
};
SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};
