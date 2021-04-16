import React from "react";

function Login() {
  return (
    <div>
      <div>
        <span>Login </span>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>
      <section>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={""} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={""} />
        </div>
      </section>
    </div>
  );
}

export default Login;
