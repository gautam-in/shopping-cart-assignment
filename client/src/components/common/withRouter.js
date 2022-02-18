import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let history = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, history, params}}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter