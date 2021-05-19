import { useEffect, useState } from "react";

export default function useForm(initial = {}, requiredFields = []) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const [errors, setErrors] = useState(requiredFields);
  const [validationErrors, setValidationErrors] = useState({});
  /* const initialValues = Object.values(initial).join(""); */
  /*   
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);
 */
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value) {
      console.log("errors ", errors);
      setErrors((prev) => {
        if (prev.includes(name)) {
          return prev.splice(prev.indexOf(name), 1);
        }
        return prev;
      });
    } else if (!errors.includes(name)) {
      console.log("doesnt include name ", errors);
      setErrors((prev) => [...prev, name]);
    }
    /* inputValidation(name, value); */
  }
  const inputValidation = (name, value) => {
    if (!value) {
      setValidationErrors((prev) => {
        let [...val] = prev[name];

        console.log("Ab", val);
        return { ...prev, [name]: ["Empty field", ...val] };
      });
      /*  storedError = { ...storedError, [name]: ["Empty field", ...[name]] }; */
    } /* else if (regexFields.includes(name)) {
      setErrors((prev) => {
        if (prev.includes(name)) {
          return prev.splice(prev.indexOf(name), 1);
        }
        return prev;
      });
    }
    let errors = {
      name: ["Empty field"],
      email: ["Empty field", "Email format not correct"],
      password: ["Empty field", "Password not right"],
    }; */
  };
  useEffect(() => {
    console.log("useform ", validationErrors);
  }, [validationErrors]);
  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    errors,
    handleChange,
    resetForm,
    clearForm,
  };
}
