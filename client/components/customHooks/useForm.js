import { useEffect, useState } from "react";

export default function useForm(initial = {}, rules = {}) {
  const [inputs, setInputs] = useState(initial);

  /* const initialValues = Object.values(initial).join(""); */
  /*   
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);
 */

  const [errors, setErrors] = useState({});
  const emptyFieldMesssage = "Field cannot be empty.";

  useEffect(() => {
    let validationRules = {};
    //Adding error message to each name
    for (const [key, value] of Object.entries(rules)) {
      //if required field is present in the array then add the error message
      if (value[0]) validationRules[key] = [emptyFieldMesssage];
    }
    console.log("rules ", validationRules);
    setErrors(validationRules);
  }, []);

  const fieldValidation = ({ value, name }) => {
    if (rules[name]?.[0] === "required") {
      setErrors((prev) => {
        if (value.trim()) {
          if (prev[name]?.length === 1) delete prev[name];
          else if (prev[name]?.length === 2) prev[name][0] = "";
          return prev;
        }
        if (!value) {
          return { ...prev, [name]: [emptyFieldMesssage] };
        }
        return prev;
      });
    }
    if ((!rules[name]?.[0] || value.trim()) && rules[name]?.[1]) {
      const strongRegex = new RegExp(rules[name][1]);
      setErrors((prev) => {
        if (strongRegex.test(value) && prev[name]) {
          console.log("prev[name]", prev[name]);
          if (prev[name][0]) prev[name].splice(1, 1);
          else delete prev[name];
          return prev;
        }
        if (!strongRegex.test(value)) {
          return {
            ...prev,
            [name]: [prev[name]?.[0] || "", rules[name]?.[2]],
          };
        }
        return prev;
      });
    }
  };

  function handleChange(e) {
    let { value, name, type } = e.target;
    console.log(" value is ", value);
    //Replace preceding white spaces
    value = value.replace(/^\s+/, "");
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "password") {
      value = value.trim();
    }
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (Object.keys(rules).length > 0) {
      fieldValidation({ value, name });
    }
  }

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
