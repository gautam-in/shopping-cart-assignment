import React, {useEffect, useState} from 'react';
import styles from '../../styles/Auth.module.scss'
import {useRouter} from "next/router";
import Head from "next/head";
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')

    const loginUser = async (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/v1/auth/login', {
            method : 'POST',
            body: JSON.stringify({email, password}),
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
                <meta name="keywords" content=""/>
                <title>Login</title>
            </Head>
            <div className={styles.loginText}>
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>

            </div>
            <div className={styles.loginForm}>
                <form>
                    <div className={styles.inputField}>
                        <label> Email
                    <input type="email" className={styles.inputText} value={email} onChange={e => setEmail(e.target.value)}/>
                        </label>

                    </div>
                    <div className={styles.inputField}>
                        <label> Password
                            <input type="password" className={styles.inputText} value={password} onChange={e => setPassword(e.target.value)}/>
                        </label>

                    </div>

                    <button type="submit" className={styles.loginBtn} onClick={loginUser}>Login</button>
                    {errorMsg && <p className="errorTxt">{errorMsg}</p>}

                </form>
            </div>


        </div>
    );
};

export default Login;