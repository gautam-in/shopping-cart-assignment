import { useHistory } from "react-router-dom";
import "./signin.scss";
import Input from "../../UI/Input/Input";

const Signin = () => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };
  
  return (
    <div className="flex--row">
      <div className="pageDetails">
        <h1 className="pageDetails__heading">Login</h1>
        <p className="pageDetails__desc">Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="auth-form">
        <form onSubmit={submitHandler} method="POST" action="/">
          <div className="rowInput flex--column">
            <Input
              type="email"
              placeholder="Email"
              className="rowInput__input-text"
              id="email"
              required
              name="email"
            />
            <label htmlFor="email" className="rowInput__labelHelper">
              Email
            </label>
          </div>
          <div className="rowInput flex--column">
            <Input
              type="password"
              name="password"
              id="password"
              className="rowInput__input-text"
              placeholder="Password"
              required
            />
            <label htmlFor="password" className="rowInput__labelHelper">
              Password
            </label>
          </div>
          <div className="submit-btn"> 
          <input className="submit" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;