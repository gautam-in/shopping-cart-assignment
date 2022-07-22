import AppLayout from "./layouts/appLayout";
import "./global.scss";
import HomeLayout from "./layouts/homeLayout";
import PlpLayout from "./layouts/plpLayout";
import SigninForm from "./components/signinForm";


import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignInLayout from "./layouts/signinLayout";
import SignupForm from "./components/signupForm";


function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact  component={HomeLayout} />
          <Route exact path="/products" component={
           PlpLayout
          } />
            <Route path="/signin" exact render={()=> <SignInLayout 
              heading = "Login" 
              subHeading="Get access to your Orders, Wishlists and Recommendations"
              component={<SigninForm/>}
            /> } />
            <Route path="/register" exact render={()=> <SignInLayout 
              heading = "Signup" 
              subHeading="We do not share personal details with anyone"
              component={ <SignupForm/> }
            /> } />
        </Switch>
      </ BrowserRouter >
    </AppLayout>
  );
}

export default App;
