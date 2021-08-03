import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useStore } from "../store/Store";
import { login } from "../actions/userActions";
import { useRouter } from "next/router";

const Register = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Registerleft = styled.div`
  width: 40%;
  @media (max-width: 767px) {
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    margin: 20px 0;
  }
`;

const RegisterForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

const FormGroup = styled.div`
  margin: 30px 0 0 0;
  position: relative;

  label {
    font-size: 12px;
    color: var(--colorBlue);
    opacity: 0;
    position: absolute;
    top: -15px;
    left: 0;
    transition: all 0.3s;
  }

  input {
    color: #444;
    border: 0;
    border-bottom: 1px solid currentColor;
    width: 100%;
    height: 38px;
    padding: 0 5px;
    transition: all 0.2s;

    &:focus {
      border-color: var(--colorBlue);
      outline: none;
    }

    &::placeholder {
      color: #999;
    }

    &:not(:placeholder-shown) + label {
      opacity: 1;
    }
  }
`;

const RegisterBtn = styled.button`
  background: var(--colorPrimary);
  color: #fff;
  border: 0;
  padding: 10px 20px;
  transition: all 0.2s;
  width: 100%;
  margin-top: 40px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [, dispatch] = useStore();
  const router = useRouter();
  const handleRegister = (e) => {
    e.preventDefault();

    // Check if fields are filled properly.
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      cPassword === "" ||
      password !== cPassword
    ) {
      alert("Please fill all fields properly!");
      return;
    }

    // Register user

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        //signed in
        userCredentials.user.updateProfile({
          displayName: firstName + " " + lastName,
        });
        dispatch(
          login({
            userName: userCredentials.user.displayName,
            email: userCredentials.user.email,
            uid: userCredentials.user.uid,
          })
        );
      })
      .then(() => router.push("/"))
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Register>
      <Registerleft>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </Registerleft>
      <RegisterForm autocomplete="off">
        <FormGroup>
          <input
            id="fname"
            name="fname"
            type="text"
            autoFocus
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="fname">First Name</label>
        </FormGroup>
        <FormGroup>
          <input
            id="lname"
            name="lname"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lname">Last Name</label>
        </FormGroup>
        <FormGroup>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </FormGroup>
        <FormGroup>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </FormGroup>
        <FormGroup>
          <input
            id="cpassword"
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <label htmlFor="cpassword">Confirm Password</label>
        </FormGroup>
        <RegisterBtn onClick={handleRegister}>Register</RegisterBtn>
      </RegisterForm>
    </Register>
  );
}
