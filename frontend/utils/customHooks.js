import { useState, useEffect } from 'react';

export const useFetch = (url, method, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);

    fetch(url, {
      method,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return {
    data,
    loading: !Boolean(data || error),
    error,
  };
};

export const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const initialValues = Object.values(initial).join('');

  useEffect(() => setInputs(initial), [initialValues]);

  function handleChange(event) {
    let { type, name, value } = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = event.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearFrom() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearFrom,
  };
};
