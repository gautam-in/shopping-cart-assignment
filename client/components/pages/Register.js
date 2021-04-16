import React from "react";

function Register() {
  return (
    <div>
      <div>
        <span>Register </span>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <section>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={""} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={""} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={""} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={""} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={""} />
        </div>
      </section>
    </div>
  );
}

export default Register;
