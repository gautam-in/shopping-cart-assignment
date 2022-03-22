import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectCurrentUser } from "../redux/auth/auth.selectors";

const PublicRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? <Redirect to="/" /> : <Component />;
      }}
    />
  );
};

export default PublicRoute;
