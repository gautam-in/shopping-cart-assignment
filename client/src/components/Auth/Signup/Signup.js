import { useHistory } from "react-router-dom";
import "./signup.scss";
import Input from "../../UI/Input/Input";

const Signup = () => {
  const history = useHistory();
  const submitHandler = (e) => {
    if (e.target[3].value === e.target[4].value) {
      e.preventDefault();
      history.push("/");
    } else {
      alert("Password does not match");
      e.preventDefault();
    }
  };
  return (
    <div className="flex--row">
      <div className="pageDetails">
        <h1 className="pageDetails__heading">SignUp</h1>
        <p className="pageDetails__desc">We do not share your personal details with anyone</p>
      </div>
      <div className="auth-form">
        <form onSubmit={submitHandler} method="POST" action="/">
          <div className="rowInput flex--column">
            <Input
              type="text"
              placeholder="First Name"
              className="rowInput__inputText"
              id="firstName"
              required={true}
              name="firstName"
            />
            <label htmlFor="firstName" className="rowInput__labelHelper">
              First Name
            </label>
          </div>
          <div className="rowInput flex--column">
            <Input
              type="text"
              placeholder="Last Name"
              className="rowInput__inputText"
              id="lastName"
              required
              name="lastName"
            />
            <label htmlFor="lastName" className="rowInput__labelHelper">
              Last Name
            </label>
          </div>
          <div className="rowInput flex--column">
            <Input
              type="email"
              placeholder="Email"
              className="rowInput__inputText"
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
              className="rowInput__inputText"
              placeholder="Password"
              required
            />
            <label htmlFor="password" className="rowInput__labelHelper">
              Password
            </label>
          </div>
          <div className="rowInput flex--column">
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="rowInput__inputText"
              placeholder="Confirm Password"
              required
            />
            <label htmlFor="confirmPassword" className="rowInput__labelHelper">
              Confirm Password
            </label>
          </div>
          <div className="submit-btn">
          <input className="submit" type="submit" value="SignUp" />
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Signup;