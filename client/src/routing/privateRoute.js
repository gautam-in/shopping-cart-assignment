import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/auth.selectors";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
