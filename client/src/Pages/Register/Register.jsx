import Header from "../../Components/Header/Header";
import SignUpBody from "./RegisterBody";
import Copyright from "../../Components/Footer/Footer";

const Register = () => {
  return (
    <div className="section-register height-100-perc">
      <Header />
      <SignUpBody />
      <Copyright />
    </div>
  );
};

export default Register;
