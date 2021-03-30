import React from "react";

function Register() {
  return (
    <div className="col-md-10 mx-auto">
      <div className="row pt-5">
        <div className="col-md-7">
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone</p>
        </div>
        <div className="col-md-5">
          <form autoComplete="off">
            <div className="form-group">
              <input
                type="text"
                name="firstname"
                className="form-control"
                required
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastname"
                className="form-control"
                required
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="registeremail"
                className="form-control"
                required
              />
              <label htmlFor="registeremail">Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="signuppassword"
                className="form-control"
                required
                autoComplete="new-password"
              />
              <label htmlFor="signuppassword">Password</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="signupconfirmpassword"
                className="form-control"
                required
                autoComplete="new-password"
              />
              <label htmlFor="signupconfirmpassword">Confirm Password</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
