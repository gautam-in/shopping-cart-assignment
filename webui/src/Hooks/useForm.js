import { useState, useEffect } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);
  const initValues = Object.values(initialState).join('');
  useEffect(() => {
    /* eslint-disable */
    setInputs(initialState);
  }, [initValues]);

  function handleChange(e) {
    let { name, value, type, files } = e.target;

    if (type === 'number') {
      value = +value;
    }

    if (type === 'file') {
      [value] = files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const clearValues = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );
    setInputs(clearValues);
  }

  return { inputs, handleChange, clearForm, resetForm };
}
