import Input from "../../reusable_components/Input";
import { useEffect, useState } from "react";
import Button from "../../reusable_components/Button";
import styles from "./SignupForm.module.scss";
import useInput from "../../custom_hooks/use-input";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/userReducer";

const SignupForm = () => {
  const { userList } = useSelector((state) => state.users);
  const userDispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(false);
  const [isPasswordMatches, setIsPasswordMatches] = useState(false);
  const navigate = useNavigate();

  const {
    userInput: enteredFirstName,
    isInputValid: isFirstNameIsValid,
    hasError: isFirstNamehasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstName,
  } = useInput((value) => value.trim().length > 0);

  const {
    userInput: enteredLastName,
    isInputValid: isLastNameIsValid,
    hasError: isLastNamehasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastName,
  } = useInput((value) => value.trim().length > 0);

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

  const {
    userInput: enteredConfirmPassword,
    isInputValid: isConfirmPasswordIsValid,
    hasError: isConfirmPasswordhasError,
    inputChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    resetInput: resetConfirmPassword,
  } = useInput((value) => value.trim().length > 0);

  useEffect(() => {
    const passwordCheck = setTimeout(() => {
      if (enteredPassword === enteredConfirmPassword) {
        setIsPasswordMatches(true);
      } else {
        setIsPasswordMatches(false);
      }
    }, 400);

    return () => {
      clearTimeout(passwordCheck);
    };
  }, [enteredConfirmPassword]);

  const passwordHasError = isConfirmPasswordIsValid && !isPasswordMatches;

  const isEmailExisting = userList.some((item) => item.email === enteredEmail);

  useEffect(() => {
    if (
      isFirstNameIsValid &&
      isLastNameIsValid &&
      isEmailIsValid &&
      isPasswordIsValid &&
      !passwordHasError &&
      isConfirmPasswordIsValid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    isFirstNameIsValid,
    isLastNameIsValid,
    isEmailIsValid,
    isPasswordIsValid,
    passwordHasError,
    isConfirmPasswordIsValid,
  ]);

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    };
    userDispatch(userActions.addUser(newUser));
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
    navigate("/login");
  };

  return (
    <form className={styles["signup-form"]} onSubmit={submitHandler}>
      <Input
        label="First Name"
        type="text"
        name="firstName"
        id="firstName"
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        value={enteredFirstName}
      />
      {isFirstNamehasError && (
        <div className={styles.error}>Enter a valid first name</div>
      )}
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        id="lastName"
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        value={enteredLastName}
      />
      {isLastNamehasError && (
        <div className={styles.error}>Enter a valid last name</div>
      )}
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
      {isEmailExisting && (
        <div className={styles.error}>This email already exists</div>
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
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={confirmPasswordChangeHandler}
        onBlur={confirmPasswordBlurHandler}
        value={enteredConfirmPassword}
      />
      {isConfirmPasswordhasError && (
        <div className={styles.error}>Enter a valid password</div>
      )}
      {passwordHasError && (
        <div className={styles.error}>
          Password and Confirm Password does not match.
        </div>
      )}
      <Button
        disabled={!isFormValid}
        type="submit"
        addClassName={styles["sign-button"]}
      >
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
