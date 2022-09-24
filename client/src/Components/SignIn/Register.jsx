import React from "react";
import "./SignIn.css";

const Register = () => {
  return (
    <React.Fragment>
      <section className="m-5">
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-md-6">
              <h2>Register</h2>
              <p>Your Personal Details are Secured with Us</p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="First Name"
                  />
                  <label for="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Last Name"
                  />
                  <label for="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Confirm Password"
                  />
                  <label for="floatingPassword">Confirm Password</label>
                </div>
                <div className=" text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
