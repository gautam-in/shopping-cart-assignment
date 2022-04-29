import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'


function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'aks@gmail.com' && password === 'Pass@7575') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/products')
    } else {
      alert('Please enter valid credentials!');
      setEmail('');
      setPassword('');
    }
  }
  
  return (<>
    <div className="container mt-3">
        <div className="row">
            <div className="offset-1 col-5">
                <strong>Signup</strong>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className="col-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Email</label>
                <input type="text" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value.trim())} autoFocus />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your Password" id="password" value={password} onChange={(e) => setPassword(e.target.value.trim())} />
                <button type="submit" className="btn btn-primary btn-block" >Login</button>
            </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default LoginComponent;
