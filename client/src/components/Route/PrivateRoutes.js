import { Route,Redirect,useLocation} from 'react-router-dom';
import useAuth from '../Hooks/Auth';
const PrivateRoute = (props) => {
    const location = useLocation();
    const { isLoggedIn} = useAuth();
  
    return isLoggedIn ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    );
  };
  export default PrivateRoute;