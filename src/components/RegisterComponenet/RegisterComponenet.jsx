import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import SideContentComponent from "../../components/SideContentComponent/SideContentComponent";
import FormComponent from "../../components/CustomComponent/FormComponent/FormComponent";
import classes from "./RegisterComponent.css";

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

const RegisterComponent = () => {
  const [signUpData, dispatch] = useReducer(signUpFormReducer, signUpFormData);
  const navigate = useNavigate();
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

  const validateInput = (input) => {
    let validPass = false;
    let passMatch = false;
    if (/^[A-Z0-9]{6,}$/i.test(input.password)) {
      validPass = true;
    }
    if (input.password === input.confirmPassword) {
      passMatch = true;
    }
    return { validPass: validPass, passwordMatch: passMatch };
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(signUpData);
    const validity = validateInput(signUpData);
    if (validity.validPass && validity.passwordMatch) {
      navigate("/");
    } else {
      if (!validity.validPass) {
        alert("Invalid password");
      }
      if (!validity.passwordMatch) {
        alert("Passwords do not match");
      }
    }
  };

  return (
    <>
      <main className="signup__container">
        <SideContentComponent
          isLogin={false}
          title={"SignUp"}
          description={"We do not share your personal details"}
        />
        <FormComponent
          inputLabel={inputLabel}
          button={"SignUp"}
          isLogin={false}
          handleChange={handleChange}
          submitHandler={submitHandler}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default RegisterComponent;