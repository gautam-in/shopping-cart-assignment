import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.scss";

function Onboarding({
  heading,
  description,
  inputsList,
  btnContent,
  handleSubmit,
}) {
  return (
    <div className="form__wrapper">
      <div className="form__details">
        <h1 className="form__heading">{heading}</h1>
        <p>{description} </p>
      </div>
      <form className="form__inputs" onSubmit={handleSubmit}>
        {inputsList.map((input) => (
          <Input
            key={input.id}
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
            value={input.value}
            onChange={(e) => input.onChange(e)}
            errorMessage={input.error ? input.emailError : ""}
          />
        ))}
        <Button className="form__btn">{btnContent}</Button>
      </form>
    </div>
  );
}

export default Onboarding;
