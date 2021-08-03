import firebase from "firebase";
import "firebase/auth";
import { useRouter } from "next/router";
import LoginForm from "../components/loginSignup/LoginSignup";
import { connect } from "react-redux";
import { updateLogin } from "../redux/userReducer";

function Login({ updateLogin }) {
  const router = useRouter();

  async function onLogin(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        router.push("/");
        updateLogin();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return <LoginForm text="Login" submit={onLogin} />;
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: () => dispatch(updateLogin()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
