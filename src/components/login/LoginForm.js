import Input from "../../reusable_components/Input";
import Button from "../../reusable_components/Button";
import { useState, useEffect } from "react";
import styles from "./LoginForm.module.scss";
import useInput from "../../custom_hooks/use-input";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/userReducer";

const LoginForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const { userList, isLoggedIn } = useSelector((state) => state.users);
  const [isUserExisting, setUserIsExisting] = useState(null);

  const userDispatch = useDispatch();

  const {
    userInput: enteredEmail,
    isInputValid: isEmailIsValid,
    hasError: isEmailhasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput((value) => value.trim().length > 0 && value.includes("@"));

  const {
    userInput: enteredPassword,
    isInputValid: isPasswordIsValid,
    hasError: isPasswordhasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPassword,
  } = useInput((value) => value.trim().length > 0);

  useEffect(() => {
    if (isEmailIsValid && isPasswordIsValid && !isLoggedIn) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailIsValid, isPasswordIsValid, isLoggedIn]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const loginEmailCheck = userList.some((item) => {
      return item.email === enteredEmail && item.password === enteredPassword;
    });

    if (loginEmailCheck) {
      const User = {
        email: enteredEmail,
        password: enteredPassword,
      };
      userDispatch(userActions.addCurrentUser(User));
      setUserIsExisting(true);
      resetEmail();
      resetPassword();
    } else {
      setUserIsExisting(false);
    }
  };

  return (
    <form className={styles["login-form"]} onSubmit={onSubmitHandler}>
      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
      />
      {isEmailhasError && (
        <div className={styles.error}>Enter a valid email</div>
      )}
      <Input
        label="Password"
        type="password"
        name="password"
        id="password"
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={enteredPassword}
      />
      {isPasswordhasError && (
        <div className={styles.error}>Enter a valid password</div>
      )}
      {isUserExisting !== null && !isUserExisting && (
        <div className={styles.error}>Incorrect Email and Password</div>
      )}
      <Button
        type="submit"
        addClassName={styles["sign-button"]}
        disabled={!isFormValid}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
