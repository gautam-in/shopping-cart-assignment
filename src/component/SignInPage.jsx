import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPasswordFunction } from "../utils/firebase.utils";
import Button from "./Button";
import FormInput from "./FormInput";
import "../styles/sign-in.scss";
import { signInwithEmail } from "../store/slices/user/user.action";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInwithEmail(email, password));
      // const user = await signInWithEmailAndPasswordFunction(email, password);
      // console.log(user);
      setFormFields(defaultFormFields);
      // user && navigate("/");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email and password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-container">
      <div className="sign-in-header">
        <h2 className="title">Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>
      <div>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleChange}
          pattern="^(?=.*[a-zA-Z])(?=.*[0-9])(?!.* ).{6,}$"
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="max" onSubmit={handleSubmit}>
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignInPage;
