import Column from "components/atoms/column/column";
import Row from "components/atoms/row/row";
import SignInComponent from "components/organisms/signIn/signInComponent";
import { ReactElement, useEffect } from "react";
import { LocalStorage } from "services/storage";
import { useHistory } from "react-router-dom";
import { allRoutes } from "navigation/allRouteNames";
import Loader from "components/atoms/loader/loader";
import "./signIn.scss";

const SignIn = (): ReactElement => {
  let userStatus = LocalStorage.getStorage("status");
  const history = useHistory();

  useEffect(() => {
    userStatus === true && history.push(allRoutes.PRODUCTS);
  }, [userStatus, history]);

  return (
    <div className="singin-container">
      {!userStatus ? (
        <Row>
          <Column md={6} lg={6} xs={12} sm={12} className="signin-box">
            <div className="signin-text">
              <h1>Login</h1>
              <p className="sub-text">Get access to your Orders, Wishlist and Recommendations</p>
            </div>
          </Column>
          <Column md={6} lg={6} xs={12} sm={12} className="signin-box">
            <SignInComponent history={history} />
          </Column>
        </Row>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SignIn;
