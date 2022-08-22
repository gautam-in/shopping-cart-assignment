/**
 *
 * TextField
 *
 */
import React, { memo } from 'react';
import { FieldProps, getIn } from 'formik';
import {
  TextField as MuiTextField,
  StandardTextFieldProps,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export interface Props extends FieldProps, StandardTextFieldProps {}

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080',
    },
  },
});

export const TextField = memo((props: Props) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);

  const { error, helperText, field, form, ...rest } = props;

  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        focused
        variant="standard"
        error={error ?? Boolean(isTouched && errorMessage)}
        helperText={
          helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
        }
        {...rest}
        {...field}
        style={{
          width: '60%',
        }}
      />
    </ThemeProvider>
  );
});
