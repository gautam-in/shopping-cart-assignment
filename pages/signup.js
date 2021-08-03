import firebase from "firebase";
import "firebase/auth";
import { useRouter } from "next/router";
import LoginSignup from "../components/loginSignup/LoginSignup";
import { updateLogin } from "../redux/userReducer";

function Signup({ updateLogin }) {
  const router = useRouter();

  async function onSignup(email, password) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        router.push("/");
        updateLogin();
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return <LoginSignup text="Signup" submit={onSignup} />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: () => dispatch(updateLogin()),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
