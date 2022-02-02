import { compose } from "recompose";
import { connect } from "react-redux";
import { selectTotalCount, selectAuthenticatedUser } from "../../selectors";
import { loginUser } from "../../actions/index";
import { IState } from "@typings/state/index";
import Header from "./Header";

const mapStateToProps = (state: IState) => ({
  totalItems: selectTotalCount(state),
  authenticateUser: selectAuthenticatedUser(state),
});

const actions = { loginUser };

export default compose(connect(mapStateToProps, actions))(Header);
