import { compose } from "recompose";
import { connect } from "react-redux";
import {
  registerUser,
  loginUser,
  loginUserFail,
  logoutUser,
} from "../../actions/index";
import {
  selectRegisteredUser,
  selectAuthenticatedUser,
  isAuthenticated,
} from "../../selectors";
import { IState } from "@typings/state/index";
import SingUp from "./SignUp";

const mapStateToProps = (state: IState) => ({
  authUser: selectAuthenticatedUser(state),
  registeredUser: selectRegisteredUser(state),
  isAuthenticated: isAuthenticated(state),
});

const actions = { registerUser, loginUser, loginUserFail, logoutUser };

export default compose(connect(mapStateToProps, actions))(SingUp);
