import { Route,Redirect,useLocation} from 'react-router-dom';
import useAuth from '../Hooks/Auth';
const PublicRoute = (props) => {
    const location = useLocation();
    const { isLoggedIn} = useAuth();  
    return isLoggedIn ? (
        <Redirect
        to={{
          pathname: "/",
          state: { from: location }
        }}
      />
  
    ) : (
        <Route {...props} />
    );
  };
  export default PublicRoute;