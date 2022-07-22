import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function FormInput(props) {
  const { control } = useFormContext();
  const { name, label, id, errorobj, type } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          id={id}
          label={label}
          type={type}
          variant="outlined"
          fullWidth
          error={!!errorobj?.[name]?.message}
          helperText={errorobj?.[name]?.message}
          {...field}
          {...props}
        />
      )}
    />
  );
}

export default FormInput;
