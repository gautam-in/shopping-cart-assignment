import { useState } from "react";

const formHOC = (Component, defaultFormFields) => {
  return (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    };

    return (
      <Component
        {...props}
        handleChange={handleChange}
        formFields={formFields}
      />
    );
  };
};

export default formHOC;
