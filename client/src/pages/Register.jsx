import "../assets/styles/pages/Register.scss";

const Register = () => {
  return (
    <div className="page-register">
      <div className="container">
        <div>
          <h1>Signup</h1>
          <p className="sub-heading">
            We do not share your personal data with anyone.
          </p>
        </div>

        <div>
          <form action="" className="form-grid">
            <div className="form-group">
              <label htmlFor="firstname">
                First Name <span className="required">(required)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">
                Last Name <span className="required">(required)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">(required)</span>
              </label>
              <input
                type="email"
                className="form-control"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                id="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password <span className="required">(required)</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmpassword">
                Confirm Password <span className="required">(required)</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                required
              />
            </div>

            <input type="submit" value="Signup" className="btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
