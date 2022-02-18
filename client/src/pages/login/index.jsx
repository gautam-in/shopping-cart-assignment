import React, { useState } from "react";
import Footer from "../../components/footer/footer.componets";
import Form from "../../components/form/form.components";
import NavBar from "../../components/navbar/navbar.component";
import { detectDevice } from "../../commonFunctions/detectDevice";

import "./styles.scss";

const LoginPage = (props) => {
  const [formData, setFormData] = useState([
    { type: "email", placeholder: "Email", value: "", id: "email" },
    { type: "password", placeholder: "Password", value: "", id: "password" },
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
          <h2>Login</h2>
          <p>Get Access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section className="form-container__rightSection">
          <Form
            data={formData}
            handleChange={handleChange}
            type="submit"
            width="100%"
          >
            <span
              style={{ fontSize: detectDevice("mobile") ? "14px" : "16px" }}
            >
              Login
            </span>
          </Form>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LoginPage;
