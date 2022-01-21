import "./Login.scss";
import SideContent from "../../Components/SideContent/SideContent";
import Form from "../../Components/UI Components/Form/Form";

const Login = () => {
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
  return (
    <main className="login-container">
      <SideContent
        className={"login-container__article"}
        title={"Login"}
        description={"Get Access to your Orders, Wishlist and Recommendations"}
      />
      <Form
        inputLabel={inputLabel}
        button={"Login"}
        className={"login-container__form"}
      />
    </main>
  );
};

export default Login;
