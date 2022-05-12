import classes from "./SideContentComponent.css";

const SideContentComponent = ({ isLogin, title, description }) => {
  return (
    <div
      className={
        isLogin
          ? classes.login__container__article
          : classes.signup__container__article
      }
    >
      <h2>{title}</h2>
      <p className={classes.text}>{description}</p>
    </div>
  );
};

export default SideContentComponent;