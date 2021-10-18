import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    minWidth: "320px",
    position: "fixed",
    top: 0,
    right: 0,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alerts = (props) => {
  const { msg } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert onClose={() => {}}>{msg}</Alert>
    </div>
  );
};
export default Alerts;
