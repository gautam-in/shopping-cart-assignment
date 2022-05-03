import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { SetRegister } from '../redux/Action_creators/RegisterActions';

const Registermodel = {
  firstName: "",
  lastName: '',
  email: '',
  password: "",
  confirmPassword:''
}
const Register = () => {
  const [user, setUser] = useState({...Registermodel});
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const handleChange = (type, event) => {
    let obj = user;
    obj[type]=event.target.value;
    setUser(obj)
  }

  const handleSubmit=()=>{
    delete user.confirmPassword
    dispatch(SetRegister(user))
    navigate('/login')
  }

  return (
    <div className='react-container' style={{ marginTop: '120px' }}>
      <div className='row justify-content-center ' >
        <div className='col-sm-4'>
          <h4><strong>Signup</strong></h4>
          <small><strong>We do not share your personal details with anyone.</strong></small>
        </div>
        <div className='col-sm-4'>
          <form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
            <div className='sec'>
              <input type="text"  onChange={(e) => { handleChange('firstName', e) }} className="inputText" required />
              <span className="floating-label">First Name</span>
            </div>
            <div className='sec mt-4'>
              <input type="text"  onChange={(e) => { handleChange('lastName', e) }} className="inputText" required />
              <span className="floating-label">Last Name</span>
            </div>
            <div className='sec mt-4'>
              <input type="email"  onChange={(e) => { handleChange('email', e) }} className="inputText" required />
              <span className="floating-label">Email</span>
            </div>
            <div className='sec mt-4'>
              <input type="password" onChange={(e) => { handleChange('password', e) }} required />
              <span className="floating-label">Password</span>
            </div>
            <div className='sec mt-4'>
              <input type="password"   onChange={(e) => { handleChange('confirmPassword', e) }} required />
              <span className="floating-label"> Confirm Password</span>
              {
                (user.password != user.confirmPassword) ? (
                  <p className='text-danger' >Password does not match</p>
                ):<></>
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