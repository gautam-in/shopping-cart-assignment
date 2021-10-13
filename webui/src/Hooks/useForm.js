import { useState, useEffect } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);
  const [error,setError]=useState({});
  const [submitState,setSubmitState]=useState({error:false});
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

  function handleError(e,rule){
    let {name,value}=e.target;
    setError({
      ...error,
      [name]:validate(rule,value)
    })
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
  
  function formInvalid(rules){
    return Object.entries(rules).some(([field,rule])=>validate(rule,inputs[field]));
  }

  function validate(rule,value=""){
    let {message='Invalid value format!',pattern,required,equalTo}=rule;
    if(required && value===""){
      return 'This field is required!'
    }else if("pattern" in rule && value && !pattern.test(value)){
      return message;
    }else if("equalTo" in rule && value!==inputs[equalTo]){
      return message;
    }
    return null;
  }

  return { inputs,formInvalid,inputError:error,handleError, handleChange, clearForm, resetForm,setSubmitState,submitState };
}