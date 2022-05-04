import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <React.Fragment>
      <section className="m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Login</h2>
              <p>Get Access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="col-md-6">
              <form>
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

export default SignIn;
