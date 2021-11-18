import React, {useState} from 'react';
import './register.css';

function Register() {
    const [formdata, setformData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [errmsg, seterrMsg] = useState('');
    const [successmsg, setsuccessMsg] = useState('');

    const handleForm = (e) => {
        setformData({...formdata, [e.target.name]: e.target.value});
        
    }

    const validateForm = (e) => {
        e.preventDefault();
        const {firstname,lastname,email,password,confirmpassword} = formdata;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(firstname==='' || lastname==='' || email==='' || password==='' || confirmpassword==='') {
            setsuccessMsg('');
            seterrMsg('All fields are mandatory to fill!');
        }
        else if(password !== confirmpassword) {
            setsuccessMsg('');
            seterrMsg("Password do not match!"); 
        }
        else if(!re.test(String(email).toLowerCase())) {
            setsuccessMsg('');
            seterrMsg("Enter valid email address!");
        }
        else {
            delete formdata.confirmpassword;
            let obj = JSON.parse(localStorage.getItem('userDetails'));
            if(obj!==null && email === obj.email) {
                seterrMsg('User already registered!');
            }
            else {
                localStorage.setItem('userDetails', JSON.stringify(formdata));
                setsuccessMsg('User Registered Successfully!');
                seterrMsg('');
            }
            
        }
    }

    return (
        <div className='register-page'>
            <aside className='signup-title'>
                <h1>Sign Up</h1>
                <p style={{color:'#808080'}}>We do not share your personal details with anyone.</p>
            </aside>
            <section className='form-section'>
                <form>
                    <input type='text' value={formdata.firstname} name="firstname" onChange={handleForm} placeholder='First name'/>
                    <input type='text' value={formdata.lastname} name='lastname' onChange={handleForm} placeholder='Last name'/>
                    <input type='text' value={formdata.email} name='email' onChange={handleForm} placeholder='Email'/>
                    <input type='password' value={formdata.password} name='password' onChange={handleForm} placeholder='Password'/>
                    <input type='password' value={formdata.confirmpassword} name='confirmpassword' onChange={handleForm} placeholder='Confirm Password'/>
                    {errmsg.length!==0 && <div style={{fontSize:'12px',color:'red'}}>{errmsg}</div>}
                    {successmsg.length!==0 && <div style={{fontSize:'14px',color:'green'}}>{successmsg}</div>}
                    <button onClick={validateForm} className='btn-signup'>Register</button>
                </form>
            </section>
        </div>
    )
}

export default Register
