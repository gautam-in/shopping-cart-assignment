import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
