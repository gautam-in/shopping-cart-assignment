import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
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
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState({ email: "", pwd: "" });
  const [record, setRecord] = useState([]);
  const location = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let res = await api.get("/userRecord");
      setRecord(res.data);
    };
    getData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let check = record.find((item) => {
      return item.email === user.email && item.password === user.pwd;
    });
    if (check) {
      context.setUser({ userSigned: true, name: check.firstName });
      location("/");
    } else alert("Invalid user");
  };

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <div className="description">
          Get access to your Orders, Wishlist, and Recommendations
        </div>
      </Content>
      <Form onSubmit={handleSubmit}>
        <Fields>
          <Field
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <Label>Email</Label>
        </Fields>
        <Fields>
          <Field
            type="password"
            name="pwd"
            value={user.pwd}
            onChange={handleChange}
            required
          />
          <Label>Password</Label>
        </Fields>
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

export default Signin;
