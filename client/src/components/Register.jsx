import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { SetRegister } from '../redux/Action_creators/RegisterActions';

const Registermodel = {
  firstName: "",
  lastName: '',
  email: '',
  password: "",
  confirmPassword: ''
}
const regex=new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')

const Register = () => {
  const [user, setUser] = useState({ ...Registermodel });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isTyping,setTyping]=useState(false)
  const [passwordValid,setPasswordValid]=useState(false)
  const [matchPassword,setMatch]=useState(false)
  const handleChange = (type, event) => {
    let obj = user;
    obj[type] = event.target.value;
    setUser(obj);
  }

  const handleSubmit = () => {
    if(user.password===user.confirmPassword){
      delete user.confirmPassword
      dispatch(SetRegister(user))
      navigate('/login')
    }
  }

  const checkPassword = (value) => {
    if(password_validate(value)){
      setPasswordValid(true)
    }
    else{
      setPasswordValid(false)
    }
  }

  const checkMatchPassword=()=>{
    if(user.password===user.confirmPassword){
      setMatch(true)
    }
    else{
      setMatch(false)
    }
  }

  const password_validate = (p) => {
    return  regex.test(p);
  }

  return (
    <div className='react-container p-2' style={{ marginTop: '120px' }}>
      <div className='row justify-content-center ' >
        <div className='col-sm-4 mb-3'>
          <h4><strong>Signup</strong></h4>
          <small><strong>We do not share your personal details with anyone.</strong></small>
        </div>
        <div className='col-sm-4'>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <div className='sec'>
              <input type="text" onChange={(e) => { handleChange('firstName', e) }} className="inputText" required />
              <span className="floating-label">First Name</span>
            </div>
            <div className='sec mt-4'>
              <input type="text" onChange={(e) => { handleChange('lastName', e) }} className="inputText" required />
              <span className="floating-label">Last Name</span>
            </div>
            <div className='sec mt-4'>
              <input type="email" onChange={(e) => { handleChange('email', e) }} className="inputText" required />
              <span className="floating-label">Email</span>
            </div>
            <div className='sec mt-4'>
              <input type="password" onChange={(e) => { handleChange('password', e); checkPassword(e.target.value);setTyping(true);checkMatchPassword() }} required />
              <span className="floating-label">Password</span>
              {
                (isTyping&&!passwordValid)&&(
                  <ul className='text-danger'>
                    <li><small>Password must contain  Minimum eight characters </small></li>
                    <li><small>Password must contain  at least one uppercase letter and one lowercase letter </small></li>
                    <li><small>Password must contain  one number and one special character </small></li>
                  </ul>
                )
              }
            </div>
            <div className='sec mt-4'>
              <input type="password"  onChange={(e) => { handleChange('confirmPassword', e);checkMatchPassword() }} required />
              <span className="floating-label"> Confirm Password</span>
              {
                (passwordValid && !matchPassword) ? (
                  <small className='text-danger' >Password does not match</small>
                ) : <></>
              }
            </div>
            <button className='btn btn-danger  mt-4 w-100'  >Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register