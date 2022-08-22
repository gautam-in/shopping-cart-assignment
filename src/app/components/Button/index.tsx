/**
 *
 * Button
 *
 */
import React, { memo } from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

interface Props extends ButtonProps {
  label: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#F92A53',
    },
  },
});

export const Button = memo((props: Props) => {
  const { label, ...rest } = props;

  return (
    <ThemeProvider theme={theme}>
      <CustomButton variant="contained" {...rest}>
        {label}
      </CustomButton>
    </ThemeProvider>
  );
});

const CustomButton = styled(MuiButton)`
  width: 60%;
  border-radius: 0px;
  text-transform: capitalize;
`;
