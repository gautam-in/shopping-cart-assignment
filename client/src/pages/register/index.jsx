import React, { useState } from "react";
import Footer from "../../components/footer/footer.componets";
import Form from "../../components/form/form.components";
import NavBar from "../../components/navbar/navbar.component";
import { detectDevice } from "../../commonFunctions/detectDevice";

import "./styles.scss";

const RegisterPage = (props) => {
  const [formData, setFormData] = useState([
    { type: "text", placeholder: "First Name", value: "", id: "firstName" },
    { type: "text", placeholder: "Last Name", value: "", id: "lastName" },
    { type: "email", placeholder: "Email", value: "", id: "email" },
    { type: "password", placeholder: "Password", value: "", id: "password" },
    {
      type: "password",
      placeholder: "Confirm Password",
      value: "",
      id: "confirmPassword",
    },
  ]);

  const handleChange = (value, idx) => {
    let updateData = [...formData];
    updateData[idx].value = value;
    setFormData(updateData);
  };
  return (
    <React.Fragment>
      <NavBar />
      <main className="form-container">
        <section className="form-container__leftSection">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone</p>
        </section>
        <section className="form-container__rightSection">
          <Form data={formData} type="submit" width="100%">
            <span
              style={{ fontSize: detectDevice("mobile") ? "14px" : "16px" }}
            >
              SignUp
            </span>
          </Form>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default RegisterPage;
