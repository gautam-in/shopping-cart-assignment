import React from 'react';
import ReactDOM from 'react-dom'; 
import { Container, Row ,Col,} from 'react-bootstrap';
import './login.scss'
const LoginPage = () => {
            return (
              <div  className="container" id="login-page">
                  <div className="row  mt-3" >
                    <div className="col  m6 s12 ">
                      nkjn
                    </div>
                    <form className="col  m6 s12">
                      <div className="row m-0">
                        <div className="input-field col s12 m-0">
                          <input  id="email" type="text" className="validate"/>
                          <label for="email">Email</label>
                        </div>
                        </div>
                        <div className="row m-0">
                        <div className="input-field col s12 m-0">
                          <input id="password" type="password" className="validate"/>
                          <label for="password">Password</label>
                        </div>
                      </div>
                    
                    </form>
                    </div>
          </div>
          );
  };

export default LoginPage;