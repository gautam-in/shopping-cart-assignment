import { useState } from "react";
import SignUpStyles from "./styles/SignUpStyles";

export default function SignUp() {
  let [signUp, setSignUp] = useState({});

  
  const onChangeInput = (e) => {
    setSignUp({...signUp,[e.target.name]:e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
  const data=  JSON.stringify(signUp)
    localStorage.setItem("user", data);
  };

  return (
    <SignUpStyles>
      <div>
        <h3>SignUp</h3>
        <p>we do not share your personal details with anyone</p>
      </div>
      <form onClick={onSubmit} >
        <div className="input-group">
          <input
            name="name"
            onChange={(e)=>{
              onChangeInput(e)
            }}
            id="firstname"
            type="text"
            placeholder="First Name"
            required
          />
          <label htmlFor="firstname">First Name</label>
        </div>
        <div className="input-group">
          <input
            name="lastName"
            onChange={(e)=>{
              onChangeInput(e)
            }}
            id="lastname"
            type="text"
            placeholder="Last Name"
            required
          />
          <label htmlFor="lastname">Last Name</label>
        </div>
        <div className="input-group">
          <input
            name="email"
            onChange={(e)=>{
              onChangeInput(e)
            }}
            id="email"
            type="email"
            placeholder="Email adress"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input
             onChange={(e)=>{
              onChangeInput(e)
            }}
            name="password"
            id="password"
            type="password"
            placeholder="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">
          SignUp
        </button>
      </form>
    </SignUpStyles>
  );
}
