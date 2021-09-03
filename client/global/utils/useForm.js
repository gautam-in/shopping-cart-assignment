import { useState } from "react";

const useForm = ({ initialFormValues = {} }) => {
  const [inputValues, setInputValues] = useState(initialFormValues);

  const handleChange = (e) => {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    setInputValues({
      ...inputValues,
      [name]: value.trim(),
    });
  };

  const resetForm = () => {
    setInputValues(initial);
  };

  return {
    inputValues,
    handleChange,
    resetForm,
  };
};

export default useForm;
