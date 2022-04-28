import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../stores/_actions';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './SignUp.css';
import {TextField, Button, } from '@material-ui/core';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        cpassword: '',
      },
      submitted: false,
      paswordIsMatch: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.userRegisterHandle = this.userRegisterHandle.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
    if(name === 'cpassword') {
      if (user.password === user.cpassword) {
        this.setState({
            paswordMatch: 1,
        });
      }
      else {
        this.setState({
          paswordMatch: 2,
      });
      }
    }

  }

  userRegisterHandle(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.username && user.password && user.password === user.cpassword) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <>
          <Header />
    <section className='contentWrapper'>
          <section className="signupwrapper">
                <div className="signupTile">                                                                                                               
                        <h1> Signup </h1>
                        <p> We do not share you r personal details to anyone!</p>
                </div>
                <div className="signupForm">
                <form name="form" onSubmit={this.userRegisterHandle} >
                <TextField
                  label="First Name"
                  variant="standard"
                  name="firstName"
                  value={user.firstName} onChange={this.handleChange} required />
                <TextField
                  label="Last Name"
                  variant="standard"
                  name="lastName"
                  value={user.lastName} onChange={this.handleChange} required />
                <TextField
                  id="standard-multiline-flexible"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  value={user.email} onChange={this.handleChange} required />
                  <TextField
                  id="standard-multiline-flexible"
                  label="User Name"
                  variant="standard"
                  name="username"
                  value={user.username} onChange={this.handleChange} required />
                <TextField
                  id="standard-multiline-flexible"
                  label="Password"
                  variant="standard"
                  name="password"
                  type="password"
                  value={user.password} onChange={this.handleChange} required />
                <TextField
                  id="standard-multiline-flexible"
                  label="Confirm password"
                  variant="standard"
                  name="cpassword"
                  type="password"
                  value={user.cpassword} onChange={this.handleChange} required /> 
                  {this.state.paswordIsMatch === 2 && <span> Password Dos't match!</span> } <br />
                    <input type="submit" className='btn-primary'  value="Signup"  />
                </form>
                
                </div>
            </section>
            </section>
            <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { registering } = state.registration;
  return {
    registering,
  };
}

const connectedRegisterPage = connect(mapStateToProps)(SignUp);
export { connectedRegisterPage as SignUp };


// import React from 'react';
// import Header from '../../components/header/Header';
// import Footer from '../../components/footer/Footer';
// import './SignUp.css';
// import {TextField, Button} from '@material-ui/core';
// import { connect } from 'react-redux';
// import { userActions } from '../../stores/_actions';

// class SignUp extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             user: {
//                 firstName: null,
//                 lastName: null,
//                 email: null,
//                 username: null,
//                 password: null,
//                 cpassword: null,
//             },
//             submitted: false
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.userRegisterHandle = this.userRegisterHandle.bind(this);
//     }

//     handleChange(event) {
//         const { name, value } = event.target;
//         const { user } = this.state;
//         this.setState({
//             user: {
//                 ...user,
//                 [name]: value
//             }
//         });
//         console.log(user);
//     }

//     userRegisterHandle(event) {
//         alert();
//         event.preventDefault();
//         this.setState({ submitted: true });
//         const { user } = this.state;
//         const { dispatch } = this.props;
//         if (user.firstName && user.lastName && user.username && user.password) {
//             dispatch(userActions.register(user));
//         }
//     }

//     render() {
//         console.log("signup page props------" , this.props);
//         const { registering  } = this.props;
//         const { user, submitted } = this.state;
//         return (
//           <>
//     <Header />
//     <section className='contentWrapper'>
//           <section className="signupwrapper">
//                 <div className="signupTile">                                                                                                               
//                         <h1> Signup </h1>
//                         <p> We do not share you r personal details to anyone!</p>
//                 </div>
//                 <div className="signupForm">
//                 <form name="form">
//                 <TextField
//                   label="First Name"
//                   variant="standard"
//                   name="firstName"
//                   value={user.firstName} onChange={this.handleChange} />
//                 <TextField
//                   label="Last Name"
//                   variant="standard"
//                   name="lastName"
//                   value={user.lastName} onChange={this.handleChange} />
//                 <TextField
//                   id="standard-multiline-flexible"
//                   label="Email"
//                   variant="standard"
//                   name="email"
//                   value={user.email} onChange={this.handleChange} />
//                   <TextField
//                   id="standard-multiline-flexible"
//                   label="User Name"
//                   variant="standard"
//                   name="username"
//                   value={user.username} onChange={this.handleChange} />
//                 <TextField
//                   id="standard-multiline-flexible"
//                   label="Password"
//                   variant="standard"
//                   name="password"
//                   value={user.password} onChange={this.handleChange} />
//                 <TextField
//                   id="standard-multiline-flexible"
//                   label="Confirm password"
//                   variant="standard"
//                   name="cpassword"
//                   value={user.cpassword} onChange={this.handleChange} />
//                 <Button className='btn-primary'  onClick={this.userRegisterHandle} > Signup</Button>
//                 </form>
//                 </div>
//             </section>
//             </section>
//             <Footer />
//             </>
//         );
//     }
// }

// function mapStateToProps(state) {
//     console.log("mapStateToProps-------", state); // success connection // 
//     const { registering } = state.registration;
//     return {
//         registering
//     };
// }
// const connectedSignUp = connect(mapStateToProps)(SignUp);
// export { connectedSignUp as SignUp };




