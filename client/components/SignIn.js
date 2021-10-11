import React from 'react'
import Form from './styles/Form';
import useForm from '../utils/useForm';
import useLocalStorage from '../utils/useLocalStorage';
import { useRouter }  from 'next/router'
import Link from 'next/link';



export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [userInfo, setUserInfo] = useLocalStorage("userinfo", "");
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    setUserInfo(inputs)
    alert('Successfully Loggeed In !')
    router.push('/')
    router.reload()
    resetForm();
    // Send the email and password to the graphqlAPI
  }

  if(userInfo && userInfo.email) {
      return <>
      <h4>Welcome! {userInfo.email}</h4>
       <p>Visit <button><Link href="/products">Products 🍨</Link></button></p>
      </>
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>
    </Form>
  );
}