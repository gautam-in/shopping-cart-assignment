import React, { useContext, useEffect, useState } from "react";
import { validateEmail } from "../../util/Util";
import { Context as AuthContext } from "../../context/AuthContext";
import { useHistory} from "react-router-dom";
function Login() {
  const history = useHistory();
  const [localState, setLocalState] = useState({
    email: "",
    emailError: "",
    password: "",
  });
  const { signIn, state } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setLocalState((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(localState.email)) {
      setLocalState((prevState) => {
        return { ...prevState, emailError: "ENTER VAILD EMAIL" };
      });
      return;
    }
    signIn(localState);
    setLocalState({
      email: "",
      password: "",
      emailError: "",
    });
  };

  useEffect(() => {
    if (state.errorMessage != null) setError(state.errorMessage);
    else setError(null);
    if (state.user != null) history.push("/");
  }, [state,history]);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "3rem", fontWeight: "bold" }}>Login</p>
        <p style={{ fontSize: "1.5rem" }}>
          Get access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            style={{
              borderBottom: localState.emailError && "2px solid red",
            }}
            value={localState.email}
            onChange={handleChange}
            required
          />
          <small className="error-message">{localState.emailError}</small>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={localState.password}
            onChange={handleChange}
            required
          />
          <button className="button">Login</button>
          {error && (
            <p
              style={{
                color: "red",
                fontWeight: "bolder",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Invaild Email and Password !
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
