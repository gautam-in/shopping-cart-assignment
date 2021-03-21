import React from 'react';
import { forEach } from 'lodash';
import { validateRegex } from '../utils/common';

const formHook = ({ setFields }) => {
  const [formActions, setFormActions] = React.useState({
    isSubmitting: false,
    hasErrors: false,
  });

  const validateInputs = React.useCallback((field, input, fields) => {
    let updated = { ...field, value: input };
    if (field.isRequired && !input) {
      updated = { ...updated, error: field.requiredError };
    } else if (field.isMatching && !validateRegex(input, field.isMatching)) {
      updated = { ...updated, error: field.matchError };
    } else if (field?.sameAs && fields[field?.sameAs]?.value !== input) {
      updated = { ...updated, error: field.sameAsError };
    } else {
      updated = { ...updated, error: '' };
    }
    return updated;
  }, []);

  const onInputChange = React.useCallback((e, field, fields) => {
    const input = e.target.value;
    const updated = validateInputs(field, input, fields);
    setFormActions((a) => ({ ...a, isSubmitting: false, hasErrors: !!updated.error }));
    setFields((v) => ({ ...v, [e.target.name]: updated }));
  }, [validateInputs]);

  const onSubmitValidate = React.useCallback((values) => {
    let error = false;
    let submittedValues = {};
    forEach(values, (v, i) => {
      const validated = validateInputs(v, v.value, values);
      if (validated.error) {
        error = true;
      }
      submittedValues = {
        ...submittedValues,
        [i]: validated,
      };
    });
    setFormActions((a) => ({ ...a, isSubmitting: true, hasErrors: error }));
    if (error) {
      setFields(submittedValues);
      return true;
    }
    return false;
  }, [validateInputs]);

  return {
    validateInputs,
    onInputChange,
    onSubmitValidate,
    setFormActions,
    formActions,
  };
};

export default formHook;
