import React from "react";
import "./Header.scss";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../Images/logo.png';
import Nav from "../Nav/Nav";
import { useSelector,useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/userSlice";
import {useHistory} from 'react-router';
const Logo = styled.img`
  width: 20rem;
`;

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history= useHistory();

  const signoutHandler=()=>{
    dispatch(LOGOUT(user))
    history.push("/");
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <Logo
            src={logo}
            alt="Sabka Bazar"
          />
        </Link>
      </div>
      <div className="navigation">
        <div className="login-links">
          {user.payload? <Link onClick={signoutHandler}>
            <h3>SignOut</h3>
          </Link>:
          <> <Link to="/login">
            <h3>SignIn</h3>
          </Link>
          <Link to="/signup">
            <h3>Register</h3>
          </Link>
          </>}
          
        </div>
        <Nav />
      </div>
      

    </div>
  );
}