import React from "react";

function Login(props) {
  return (
    <main className="p-5 login-wrapper" role={"main"}>
      <div className="container-md max-auto">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3" aria-label="Login">
              Login
            </h1>
            <p aria-label="Login Description">
              Get access to your Orders, Wishlist, and Recommendations
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </main>
  );
}

export default Login;
