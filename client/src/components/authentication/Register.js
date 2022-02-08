import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthReq from '../utils/AuthReq';
import {isEmail} from 'validator';


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// const email = value => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vpassword = value => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

function Register() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    // this.form.validateAll();

    if (message.length === 0) {
      AuthReq.register(
        email,
        password,
        cpassword
      ).then(
        (response) => {
          console.log("response: ", response);
          setMessage(response.data.message);
          setSuccessful(true);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setSuccessful(false);
          setMessage(resMessage);
        }
      );
    }
  }
  
  return(
    <div className='Register'>
      <article className="container">
      <section className="heading">
        <h1>Register</h1>
        <p>Get access to your Orders, Wishlist and Recommendations.</p>
      </section>
      <section className='details'>
        <form onSubmit={handleRegister}>
        <div>
          <label for="fname">First Name</label>
          <input type="text" name="fname" id="fname" placeholder='First Name' required />
        </div>
        <div>
          <label for="lname">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Last Name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)} validations={[required]} />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}  validations={[required]} />
        </div>
        <div>
          <label for="cpassword">Confirm Password</label>
          <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" value={cpassword} onChange={e=> setCpassword(e.target.value)} validations={[required]} />
        </div>
        <button type="signup">Signup</button>

        {message && (
          <div>
            <div
              className={
                successful
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
       </form>
      </section>
      </article>
    </div>
  )
}

export default Register;
