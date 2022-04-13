import { useState } from "react";

const useInput = (validateInput) => {
  const [userInput, setUserInput] = useState("");
  const [isInputTouched, setInputIsTouched] = useState(false);

  const isInputValid = validateInput(userInput);

  const hasError = !isInputValid && isInputTouched;

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const resetInput = () => {
    setUserInput("");
    setInputIsTouched(false);
  };

  return {
    userInput,
    isInputValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
    isInputTouched,
  };
};

export default useInput;
