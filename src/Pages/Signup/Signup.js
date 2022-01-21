import "./Signup.scss";
import SideContent from "../../Components/SideContent/SideContent";
import Form from "../../Components/UI Components/Form/Form";

const Signup = () => {
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
  return (
    <main className="signup-container">
      <SideContent
        className={"signup-container__article"}
        title={"SignUp"}
        description={"We do not share your personal details"}
      />
      <Form
        inputLabel={inputLabel}
        button={"SignUp"}
        className={"signup-container__form"}
      />
    </main>
  );
};

export default Signup;
