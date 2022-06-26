import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const useForm = (validate) => {
  const [values, setValues] = useState({
    form: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formName, setFormName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    return !validate({ ...values })[name] ? true : false;
  };

  const handleKeyPress = (e) => {
    const {
      form: { localName, id },
      name,
      value,
    } = e.target;
    setValues({
      ...values,
      [name]: value,
      [localName]: id,
    });
    if (id === 'sign-in') {
      let { form, email, password } = values;
      setErrors(validate({ form, email, password }));
    } else {
      setErrors(validate({ ...values }));
    }
    return !validate({ ...values })[name] ? true : false;
  };

  const handleSubmit = (e) => {
    const { localName, id } = e.target.form;
    setValues({
      ...values,
      [localName]: id,
    });
    e.preventDefault();
    if (id === 'sign-in') {
      let { form, email, password } = values;
      setErrors(validate({ form, email, password }));
    } else {
      setErrors(validate({ ...values }));
    }
    setFormName(id);
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (formName === 'register') {
        localStorage.setItem('userData', JSON.stringify([values]));
        navigate('/form/sign-in', { replace: true });
      } else {
        const {email,password}= values;
        sessionStorage.setItem('loggedInUser',JSON.stringify([{email,password}]))
        navigate('/', { replace: true });
      }
    }
  }, [errors, formName, isSubmitting, navigate, values]);

  return { handleKeyPress, handleChange, handleSubmit, values, errors };
};

export default useForm;
