import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Header from "./bits/header";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Collection from "./pages/avatarCollection";
import Chekout from "./pages/checkout";
import SignInOut from "./pages/registration";
import { setCurrentUser } from "./redux/actions";
import { selectCurrentUser } from "./redux/selectors/user";
import Login from "./pages/login";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        }
        setCurrentUser(userAuth);
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:collectionId" component={Collection} />
          <Route exact path="/checkout" component={Chekout} />
          <Route exact path="/signIn" component={Login} />
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInOut />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
