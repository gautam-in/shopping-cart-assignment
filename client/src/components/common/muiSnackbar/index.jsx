import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import {useEffect} from 'react';

const MuiSnackBar = ({children, showSnackBar, onClose,timeout, ...props }) => {
  useEffect(()=>{
    let timeoutId = setTimeout(()=>{
      onClose()
    }, timeout)

    return ()=>{
      clearTimeout(timeoutId)
    }
  }, [showSnackBar])

  return (
    <Snackbar open={showSnackBar} onClose={onClose} {...props} >
      {children}
    </Snackbar>
  );
};

export default MuiSnackBar;