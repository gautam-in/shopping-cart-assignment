import authReducer from "@/src/reducers/authReducer";
import { useRouter } from "next/router";
import { useReducer } from "react";
import FormInput from "../form-input/FormInput";
import styles from "./AuthForm.module.scss";

const authInitialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confPassword: "",
};

export default function AuthForm({ type = "login", name, description }) {
  const router = useRouter();
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  const handleFormSubmit = () => {
    if (type === "login") {
      router.push("/");
    } else if (type === "signup") {
      router.push("/login");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    authDispatch({
      type: "UPDATE",
      key: e.target.name,
      value,
    });
  };

  const renderLoginForm = () => {
    return (
      <>
        <FormInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={authState.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={authState.password}
          onChange={handleChange}
          minLength="8"
          required
        />
      </>
    );
  };

  const renderSignUpForm = () => {
    return (
      <>
        <FormInput
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={authState.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          id="lasttName"
          name="lastName"
          placeholder="Last Name"
          value={authState.lastName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={authState.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={authState.password}
          onChange={handleChange}
          minLength="8"
          required
        />
        <FormInput
          type="password"
          id="confPassword"
          name="confPassword"
          placeholder="Confirm Password"
          value={authState.confPassword}
          onChange={handleChange}
          minLength="8"
          required
        />
      </>
    );
  };

  const btnText = type === "login" ? "Login" : "Signup";

  return (
    <div className={styles.container}>
      <div className={styles.formName}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>
          {type === "login" ? renderLoginForm() : renderSignUpForm()}
          <button className={styles.submitBtn}>{btnText}</button>
        </form>
      </div>
    </div>
  );
}
