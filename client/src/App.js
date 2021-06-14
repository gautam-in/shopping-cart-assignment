import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home"
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/home" component={Home} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;