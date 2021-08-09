import React from "react";
import Row from "components/row/row";
import Column from "components/column/column";
import { bindActionCreators, Dispatch } from "redux";
import RegistrationComponent from "./registrationComponent";
import "./register.scss";
import { useHistory } from "react-router-dom";
import { IState } from "store/interfaces";
import { SignUpSelectors } from "./redux/selectors/selectors";
import { SignUpActions } from "./redux/actions/actions";
import { connect } from "react-redux";
import { ISignUpLoading } from "./redux/reducers/reducer";
import { SignUp } from "models/login";

interface IProps {
  loading: ISignUpLoading;
  postSignUp: Function;
  user: SignUp;
}

function Index(props: IProps): React.ReactElement {
  let history = useHistory();
  const { loading, postSignUp, user } = props;
  return (
    <section className="section-register" id="registration">
      <Row>
        <Column md={6} lg={6} xs={12} sm={12} className="signup-box">
          <div className="signup-text">
            <h1>Signup</h1>
            <p>We do not share your details with anyone</p>
          </div>
        </Column>
        <Column md={6} lg={6} xs={12} sm={12} className="signup-box">
          <RegistrationComponent history={history} loading={loading.isSignup} postSignUp={postSignUp} user={user} />
        </Column>
      </Row>
    </section>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    loading: SignUpSelectors.selectLoading(state),
    user: SignUpSelectors.selectUser(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return { ...bindActionCreators(SignUpActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
