import { useReducer } from "react";
import SideContent from "../../components/SideContent/SideContent";
import Form from "../../components/UI Components/Form/Form";
import Footer from "../../components/Footer/Footer";
import classes from "./Signup.module.css";

const signUpFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };
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
    case "confirmPassword":
      return {
        ...state,
        confirmPassword: action.payload,
      };
    default:
      return state;
  }
};

const Signup = () => {
  const [signUpData, dispatch] = useReducer(signUpFormReducer, signUpFormData);
  const inputLabel = [
    {
      type: "text",
      placeholder: "First Name",
      inputId: "firstName",
    },
    {
      type: "text",
      placeholder: "Last Name",
      inputId: "lastName",
    },

    {
      type: "email",
      placeholder: "Email",
      inputId: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      inputId: "password",
    },
    {
      type: "password",
      placeholder: "Confirm Password",
      inputId: "confirmPassword",
    },
  ];

  const handleChange = (event) => {
    dispatch({ type: event.target.id, payload: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(signUpData);
  };

  return (
    <>
      <main className={classes.signup__container}>
        <SideContent
          isLogin={false}
          title={"SignUp"}
          description={"We do not share your personal details"}
        />
        <Form
          inputLabel={inputLabel}
          button={"SignUp"}
          isLogin={false}
          handleChange={handleChange}
          submitHandler={submitHandler}
        />
      </main>
      <Footer />
    </>
  );
};

export default Signup;
