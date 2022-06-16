import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar(props) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
props.handleClose();
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={props.anchorOrigin}
        open={props.open}
        autoHideDuration={props.autoHideDuration}
        onClose={handleClose}
        message={props.message}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
