import { Login } from "models/login";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { IState } from "store/interfaces";
import Column from "../../components/atoms/column/column";
import Row from "../../components/atoms/row/row";
import "./login.scss";
import LoginComponent from "../../components/organisms/login/loginComponent";
import { LoginActions } from "./redux/actions/actions";
import { ILoginLoading } from "./redux/reducers/reducer";
import { LoginSelectors } from "./redux/selectors/selectors";
// import "../../index.scss";

interface IProps {
  loading: ILoginLoading;
  history?: any;
  postLogin: Function;
  user: Login;
}

function Index(props: IProps): React.ReactElement {
  let history = useHistory();

  return (
    <section className="section-login" id="login">
      <Row>
        <Column md={6} lg={6} xs={12} sm={12} className="login-box">
          <div className="login-text">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist, Recommendations</p>
          </div>
        </Column>
        <Column md={6} lg={6} xs={12} sm={12} className="login-box">
          <LoginComponent loading={props.loading.isLogin} history={history} postLogin={props.postLogin} />
        </Column>
      </Row>
    </section>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    loading: LoginSelectors.selectLoading(state),
    user: LoginSelectors.selectLogin(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return { ...bindActionCreators(LoginActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
