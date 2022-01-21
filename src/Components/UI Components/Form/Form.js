import "./Form.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = ({ className = "", inputLabel, button }) => {
  return (
    <form className={`${className} form`} onSubmit={() => {}}>
      {inputLabel.map((input) => (
        <Input key={input.inputId} input={input} />
      ))}
      <Button className={"button"}>{button}</Button>
    </form>
  );
};

export default Form;
