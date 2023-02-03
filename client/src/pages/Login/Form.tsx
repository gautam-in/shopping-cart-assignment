import { useMarket } from "context";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Register/form.module.scss";

export const Form = () => {
  const [error, setError] = useState("")

  const { setIsAuth } = useMarket()
  const navigate = useNavigate()
  const ref = useRef<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = ref.current;
    const formData = {
      email: form.email.value,
      password: form.password.value,
    };

    const user = JSON.parse(localStorage.getItem("user") as string);
    
    if (formData.email === user.email && formData.password === user.password) {
      setIsAuth(true)
      localStorage.setItem(
        "user_in",
        JSON.stringify({ email: user.email, password: user.password })
      );
      localStorage.removeItem("user")
      navigate("/products")
    } else {
      setError("Invalid Email/Password")
    }
  };

  return (
    <form className={style.form} ref={ref} onSubmit={onSubmit}>
      <span>{error}</span>
      <label htmlFor="email">
        Email
        <input required type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Password
        <input required type="password" name="password" id="password" />
      </label>
      <button type="submit">Signup</button>
    </form>
  );
};
