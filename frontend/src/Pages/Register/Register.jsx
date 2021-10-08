import Header from "../../Components/Header/Header";
import SignUpForm from "./RegisterForm";
import Copyright from "../../Components/Footer/Footer";

const Register = () => {
  return (
    <div className="section-register height-50-perc">
      <Header />
      <SignUpForm />
      <Copyright />
    </div>
  );
};

export default Register;