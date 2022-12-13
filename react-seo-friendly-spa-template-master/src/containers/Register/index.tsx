import type { FunctionComponent } from 'react';
import { MetaInfo } from '../../components';
import { getRouteMetaInfo } from '../../config/routes.config';

const Register: FunctionComponent = () => (

    <div className="user-signin">
         <MetaInfo {...getRouteMetaInfo('Register')} />
        <div className="user-signin__text">
            <h1 className="heading-1">Sign up</h1>
            <p className="paragraph paragraph--dark">We don't share your personal details with anyone.</p>
        </div>
        <div className="user-signin__form">
            <form action="#" className="form">
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="First name" id="fname" required /> 
                    <label htmlFor="fname" className="form__label">Full name</label>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Last name" id="lname" required /> 
                    <label htmlFor="lname" className="form__label">Last name</label>
                </div>
                <div className="form__group">
                    <input type="email" className="form__input" placeholder="Email" id="email" required /> 
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
                <div className="form__group">
                    <input type="password" className="form__input" placeholder="Password" id="password" required /> 
                    <label htmlFor="password" className="form__label">Password</label>
                </div>
                <div className="form__group">
                    <input type="password" className="form__input" placeholder="Confirm password" id="confirmpwd" required /> 
                    <label htmlFor="confirmpwd" className="form__label">Confirm password</label>
                </div>
                <div className="form__group">
                  <button className="btn btn--signin">Sign Up</button>
              </div>
            </form>
        </div>
      </div> 
);

export default Register;
