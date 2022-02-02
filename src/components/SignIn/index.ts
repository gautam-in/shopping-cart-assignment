import { IState } from "@typings/state/index";
import { connect } from "react-redux";
import { compose } from "recompose";
import { loginUser } from "../../actions/index";
import { selectAuthenticatedUser } from "../../selectors";
import SignIn from "./singInForm";

const mapStateToProps = (state: IState) => ({
  authUser: selectAuthenticatedUser(state),
});

const actions = { loginUser };

export default compose(connect(mapStateToProps, actions))(SignIn);
