import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Title,
  Form,
  Fields,
  Field,
  Label,
  Button,
} from "./SigninAndRegister.styles";
import api from "../../api/data";

const Register = () => {
  const [user, setUser] = useState({});
  const [confirmpwd, setConfirmPwd] = useState("");
  const [error, setError] = useState(false);
  const location = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmpwd !== user.password) {
      setError(true);
    } else {
      let id = Math.floor(100 + Math.random() * 100);
      let data = {
        id: id,
        ...user,
      };
      let res = await api.post("/userRecord", data);
      console.log(res);
      location("/");
    }
  };
  return (
    <Container>
      <Content>
        <Title>Signup</Title>
        <div className="description">
          We do not share your personal details with anyone.
        </div>
      </Content>
      <Form onSubmit={handleSubmit}>
        <Fields>
          <Field
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            autoComplete="off"
          />
          <Label>First Name</Label>
        </Fields>
        <Fields>
          <Field
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            autoComplete="off"
          />
          <Label>Second Name</Label>
        </Fields>
        <Fields>
          <Field
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <Label>Email</Label>
        </Fields>
        <Fields>
          <Field
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <Label>Password</Label>
        </Fields>
        <Fields>
          <Field
            type="password"
            value={confirmpwd}
            onChange={(event) => setConfirmPwd(event.target.value)}
            error={error}
            required
          />
          <Label>Confirm Password</Label>
        </Fields>
        <Button>Signup</Button>
      </Form>
    </Container>
  );
};

export default Register;
