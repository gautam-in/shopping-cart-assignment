import React, {  useEffect, useState } from 'react';
import { Col, Form,  Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './form.scss';

const SignUp = () => {
    const initialValue = { firstname: "", lastname: "", email: "", password: "", confirmpassword: "" };
    const [formValues, setFormValues] = useState(initialValue);
    const [errors, setErrors] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate = (values) => {
        const formerrors = {};
        const regx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            formerrors.firstname = 'Firstname is required';
        }
        if (!values.lastname) {
            formerrors.lastname = 'Lastname is required';
        }
        if (!values.email) {
            formerrors.email = 'Email is required';
        } else if (!regx.test(values.email)) {
            formerrors.email = 'This is not valid email format';
        }
        if (!values.password) {
            formerrors.password = 'Password is required';
        }
        if (!values.confirmpassword) {
            formerrors.confirmpassword = 'Confirm password is required';
        } else if (values.password !== values.confirmpassword) {
            formerrors.confirmpassword = 'Password entered did not match!'
        }
        return formerrors;
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            navigate('/')
        }
    }, [errors])

    return (
        <div className='form-sec'>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div className='signup-data'>
                        <h3>SignUp</h3>
                        <p>We do not share your personal details with anyone</p>
                    </div>
                </Col>
                <Col md={4}>
                    <Form onSubmit={handleSubmit} >
                        <div className='form-group'>
                            
                            <input type="text" placeholder='First Name' className={errors.firstname ? 'error-border' : ''} name="firstname" value={formValues.firstname} onChange={handleChange} />
                            <p className='error'>{errors.firstname}</p>
                        </div>
                        <div className='form-group'>
                          
                            <input type="text" placeholder='Last Name' className={errors.lastname ? 'error-border' : ''} name="lastname" value={formValues.lastname} onChange={handleChange} />
                            <p className='error'>{errors.lastname}</p>
                        </div>
                        <div className='form-group'>
                           
                            <input type="text" placeholder='Email' className={errors.email ? 'error-border' : ''} name="email" value={formValues.email} onChange={handleChange} />
                            <p className='error'>{errors.email}</p>
                        </div>
                        <div className='form-group'>
                          
                            <input type="password" placeholder='Password' className={errors.password ? 'error-border' : ''} name="password" value={formValues.password} onChange={handleChange} />
                            <p className='error'>{errors.password}</p>
                        </div>
                        <div className='form-group'>
                            
                            <input type="text" placeholder='Confirm password' className={errors.confirmpassword ? 'error-border' : ''} name="confirmpassword" value={formValues.confirmpassword} onChange={handleChange} />
                            <p className='error'>{errors.confirmpassword}</p>
                        </div>
                        <button type="submit" className='btn-cls login-btn'>Signup</button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default SignUp;
