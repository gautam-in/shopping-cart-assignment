import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import SideContent from "../../components/SideContent/SideContent";
import Form from "../../components/UI/Form/Form";
//import Footer from "../../components/Footer/Footer";
import classes from "./Login.module.css";

const loginFormData = {
  email: "",
  password: "",
};

const loginFormReducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [loginData, dispatch] = useReducer(loginFormReducer, loginFormData);
  const navigate = useNavigate();
  const inputLabel = [
    {
      type: "email",
      placeholder: "Email",
      inputId: "1",
    },
    {
      type: "password",
      placeholder: "Password",
      inputId: "2",
    },
  ];

  const handleChange = (event) => {
    //console.log(event.target.value)
    dispatch({ type: event.target.type, payload: event.target.value });
  };

  const validateInput = (input) => {
    let validEmail = false;
    let validPass = false;
    if (/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
      validEmail = true;
    }
    if (/^[A-Z0-9]{6,}$/i.test(input.password)) {
      validPass = true;
    }
    //console.log("validemail=", validEmail, " validPass=", validPass)
    return { email: validEmail, pass: validPass };
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(loginData);
    const validity = validateInput(loginData);
    if (validity.email && validity.pass) {
      navigate("/");
    } else {
      if (!validity.email) {
        alert("Invalid email ID");
      }
      if (!validity.pass) {
        alert("Invalid password");
      }
    }
  };

  return (
    <>
      <main className={classes.login__container}>
        <SideContent
          isLogin={true}
          title={"Login"}
          description={
            "Get Access to your Orders, Wishlist and Recommendations"
          }
        />
        <Form
          inputLabel={inputLabel}
          button={"Login"}
          isLogin={true}
          handleChange={handleChange}
          submitHandler={submitHandler}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
