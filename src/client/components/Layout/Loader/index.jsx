import React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#bf2957',
  },
}));

export default function Loader() {
  const classes = useStyles();
  const loader = useSelector((state) => state.loader);

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={loader.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
