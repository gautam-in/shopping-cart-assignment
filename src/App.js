import React from 'react';
import HomePage from './pages/HomePage/Homepage';
import "antd/dist/antd.min.css";
import {  Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import SignUpComponent from './components/LoginSignUp/SignUp/SignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log("didmount");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth,"userAuth")
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()
          }
          );

          console.log(this.props.currentUser,"current_user");
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser} />

        <Switch >
         
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login } />
            <Route path='/signup' component={Login} />
          <Route path='/products' component={Products} />

        </Switch>

       <Footer/>

      </div>
    );
  }
}


const mapStateToPros = (state, prop) => {
  return {
    currentUser: state.user.currentUser,
  }
}
const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToPros, mapDispatchToProps)(App);



