import type { FunctionComponent } from 'react';
import { MetaInfo } from '../../components';
import { getRouteMetaInfo } from '../../config/routes.config';

const SignIn: FunctionComponent = () => (
    <div className="user-signin">
        <MetaInfo {...getRouteMetaInfo('Sign In')} />
    <div className="user-signin__text">
        <h1 className="heading-1">Login</h1>
        <p className="paragraph paragraph--dark">Get access to your Orders, Wishlist and Recommendations.</p>
    </div>
    <div className="user-signin__form">
        <form action="#" className="form">
            <div className="form__group">
                <input type="text" className="form__input" placeholder="Email" id="login-email" required /> 
                <label htmlFor="login-email" className="form__label">Email</label>
            </div>
            <div className="form__group">
                <input type="password" className="form__input" placeholder="Password" id="login-pwd" required /> 
                <label htmlFor="login-pwd" className="form__label">Password</label>
            </div>
            <div className="form__group">
              <button className="btn btn--signin">Login</button>
          </div>
        </form>
    </div>
  </div> 
);

export default SignIn;
