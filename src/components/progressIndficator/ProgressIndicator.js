import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './ProgressIndicator.css';

export default function ProgressIndicator(props) {
  return (
    <div className='progressIndicator'>
        <Stack>
                <CircularProgress color="success" />
                <p>{props.message}</p>
        </Stack>
    </div>
  );
}