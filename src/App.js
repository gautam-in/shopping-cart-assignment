import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import Register from "pages/Register";
import NotFound from "components/Shared/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
