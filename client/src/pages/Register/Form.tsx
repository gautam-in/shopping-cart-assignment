import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./form.module.scss";

export const Form = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState({
    fn_error: "",
    ln_error: "",
    email_error: "",
    pass_error: "",
  });

  const ref = useRef<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = ref.current;
    const formData = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      password: form.password.value,
    };

    if (formData.password !== form.confirm.value) {
      setFormError({ ...formError, pass_error: "Passwords are not matching" });
    }

    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/signin");
  };

  return (
    <form className={style.form} ref={ref} onSubmit={onSubmit}>
      <label htmlFor="firstname">
        First Name
        <input required type="text" name="firstname" id="firstname" />
        <span>{formError.fn_error}</span>
      </label>
      <label htmlFor="lastname">
        Last Name
        <input required type="text" name="lastname" id="lastname" />
        {formError.ln_error}
      </label>
      <label htmlFor="email">
        Email
        <input required type="email" name="email" id="email" />
        <span>{formError.email_error}</span>
      </label>
      <label htmlFor="password">
        Password
        <input required type="password" name="password" id="password" />
        <span>{formError.pass_error}</span>
      </label>
      <label htmlFor="confirm">
        Confirm Password
        <input required type="password" name="confirm" id="confirm" />
        <span>{formError.pass_error}</span>
      </label>
      <button type="submit">Signup</button>
    </form>
  );
};
