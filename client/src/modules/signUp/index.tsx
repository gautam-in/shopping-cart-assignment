import Column from "components/atoms/column/column";
import Row from "components/atoms/row/row";
import { ReactElement, useEffect } from "react";
import { LocalStorage } from "services/storage";
import { useHistory } from "react-router-dom";
import { allRoutes } from "navigation/allRouteNames";
import Loader from "components/atoms/loader/loader";
import SignUpComponent from "components/organisms/signUp/signUpComponent";
import "./signUp.scss";

const SignUp = (): ReactElement => {
  let userStatus = LocalStorage.getStorage("status");
  const history = useHistory();

  useEffect(() => {
    userStatus && history.push(allRoutes.PRODUCTS);
  }, [userStatus, history]);

  return (
    <div className="signup-container" id="signUp">
      {!userStatus ? (
        <Row>
          <Column md={6} lg={6} xs={12} sm={12} className="signup-box">
            <div className="signup-text">
              <h1>Signup</h1>
              <p>We do not share your details with anyone.</p>
            </div>
          </Column>
          <Column md={6} lg={6} xs={12} sm={12} className="signup-box">
            <SignUpComponent history={history} />
          </Column>
        </Row>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SignUp;
