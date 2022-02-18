import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./Form.module.css";

const Form = ({ isLogin, inputLabel, button, handleChange, submitHandler }) => {
  return (
    <form
      className={`${
        isLogin
          ? classes.login__container__form
          : classes.signup__container__form
      } ${classes.form}`}
      onSubmit={submitHandler}
    >
      {inputLabel.map((input) => (
        <Input key={input.inputId} input={input} handleChange={handleChange} />
      ))}
      <Button className={classes.button}>{button}</Button>
    </form>
  );
};

export default Form;
