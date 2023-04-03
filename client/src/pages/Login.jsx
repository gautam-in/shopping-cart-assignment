import "../assets/styles/pages/Login.scss";

const Login = () => {
  return (
    <div className="page-login">
      <div className="container">
        <div>
          <h1>Login</h1>
          <p className="sub-heading">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>

        <div>
          <form action="" className="form-grid">
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

            <input type="submit" value="Login" className="btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
