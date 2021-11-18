import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import LogInStyles from "./styles/LogInStyles";

export default function LogIn() {
  let [signIn, setSignIn] = useState({});
  const router = useRouter()

  const onChangeInput = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
    console.log(signIn.email)
   
  };

  const onSubmitLogin = (e) => {

    e.preventDefault()
    const existinUser = JSON.parse(localStorage.getItem("user"));
    console.log(signIn.email)
    console.log(existinUser.email)
console.log(existinUser.email === signIn.email && existinUser.password===signIn.password)

    if (
      existinUser.email === signIn.email &&
      existinUser.password === signIn.password
    ) {
      router.push("/");
    } else alert("your don`t have account please register");
  };

  return (
    <LogInStyles>
      <div>
        <h3>LogIn</h3>
        <p>Get access to your Orders and Recommendations. </p>
      </div>
      <div>
        <form onSubmit={onSubmitLogin} >
          <div className="input-group">
            <input
              onChange={onChangeInput}
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your email"
              required
            />
            <label htmlFor="email">email</label>
          </div>
          <div className="input-group">
            <input
              onChange={onChangeInput}
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button type='submit'>LogIn</button>
        </form>
      </div>
    </LogInStyles>
  );
}
