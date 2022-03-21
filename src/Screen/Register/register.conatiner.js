import { registerUserToServer } from "../../Redux/UserReducer/user-action";
import { connect } from "react-redux";
import { compose } from "redux";
import Register from "./register.screen";

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(registerUserToServer(data)),
});

const RegisterContainer = compose(connect(null, mapDispatchToProps))(Register);

export default RegisterContainer;
