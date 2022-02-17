import { useReducer } from "react";
import SideContent from "../../components/SideContent/SideContent";
import Form from "../../components/UI Components/Form/Form";
import Footer from "../../components/Footer/Footer";
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
    dispatch({ type: event.target.type, payload: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(loginData);
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
      <Footer />
    </>
  );
};

export default Login;
