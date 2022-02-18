import classes from "./SideContent.module.css";

const SideContent = ({ isLogin, title, description }) => {
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

export default SideContent;
