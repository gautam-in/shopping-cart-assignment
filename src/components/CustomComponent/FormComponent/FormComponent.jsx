import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Input from "../InputComponent/InputComponent";
import classes from "./FormComponent.css";

const FormComponent = ({ isLogin, inputLabel, button, handleChange, submitHandler }) => {
  return (
    <form
      className="form"
      onSubmit={submitHandler}
    >
      {inputLabel.map((input) => (
        <Input key={input.inputId} input={input} handleChange={handleChange} />
      ))}
      <ButtonComponent className={classes.button} type="submit">
        {button}
      </ButtonComponent>
    </form>
  );
};

export default FormComponent;