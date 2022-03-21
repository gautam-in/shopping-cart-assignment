import { checkUserExists } from "../../Redux/UserReducer/user-action";
import { compose } from "redux";
import { connect } from "react-redux";
import Login from "./login.screen";

const mapDispatchToProps = (dispatch) => ({
  checkUser: (user) => dispatch(checkUserExists(user)),
});

const LoginContainer = compose(connect(null, mapDispatchToProps))(Login);

export default LoginContainer;
