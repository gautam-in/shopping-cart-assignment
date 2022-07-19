import React, {useState} from 'react';
import styles from '../../styles/Auth.module.scss'
import {useRouter} from "next/router";
import Head from "next/head";
import {useEffect} from "react";

const Register = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')

    const registerUser = async (e) => {
        e.preventDefault();
        if(confirmPassword !== password){
            setErrorMsg('Password and Confirmed Passwords must Match');
            return;
        }
        fetch('http://localhost:5000/api/v1/auth/register', {
            method : 'POST',
            body: JSON.stringify({first_name: firstName, last_name : lastName, email : email, password : password}),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json()).then((response) => {
            if(response.data){
                localStorage.setItem("token",response.data.token);
                router.push('/')
            }
            else{
                setErrorMsg(response.error);
            }
        })


    }
    useEffect(() => {
        if(localStorage.getItem("token")) router.push('/');
    })
    return (
        <div className={styles.loginPage}>
            <Head>
                <meta name="keywords" content="register,signup"/>
                <meta name="description" content="signup page"/>
                <title>Signup</title>
            </Head>
            <div className={styles.loginText}>
                <h1>Signup</h1>
                <p>We do not share personal details with anyone.</p>

            </div>
            <div className={styles.loginForm}>
                <form>
                    <div className={styles.inputField}>
                        <label>First Name
                        <input type="text" className={styles.inputText} value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </label>


                    </div>
                    <div className={styles.inputField}>
                        <label>Last Name
                        <input type="text" className={styles.inputText} value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </label>

                    </div>
                    <div className={styles.inputField}>
                        <label>Email
                        <input type="email" className={styles.inputText} value={email} onChange={e => setEmail(e.target.value)}/>
                        </label>

                    </div>
                    <div className={styles.inputField}>
                        <label>Password
                        <input type="password" className={styles.inputText} value={password} onChange={e => setPassword(e.target.value)}/>
                        </label>

                    </div>
                    <div className={styles.inputField}>
                        <label>Confirm Password
                        <input type="password" className={styles.inputText} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                        </label>

                    </div>
                    <button type="submit" className={styles.loginBtn} onClick={registerUser}>Signup</button>
                    {errorMsg && <p className="errorTxt">{errorMsg}</p>}

                </form>
            </div>


        </div>
    );
};

export default Register;