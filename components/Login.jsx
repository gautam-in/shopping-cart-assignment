import {
  FormControl,
  Text,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styles from '../styles/Login.module.css';
import { login } from '../Authcontext';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  async function handleSubmit(event) {
    setLoading(true);
    try {
      setError('');

      event.preventDefault();
      await login(emailRef.current.value, passwordRef.current.value);
      router.push('/products');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className={styles.LoginContainer}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" id="email_id" ref={emailRef} />
          <FormHelperText color="grey">We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel marginTop="20px">Password</FormLabel>
          <Input type="password" id="password_id" ref={passwordRef} isRequired />
        </FormControl>
        <FormControl isInvalid={error}>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={loading}
            type="submit"
          >
            Submit
          </Button>
          <FormErrorMessage fontSize="large" fontWeight="bold" color="red">{error}</FormErrorMessage>
        </FormControl>
      </form>
      <Text fontSize="xl" align="center">
        Dont have an account? Create new one
        <Link href="/signup" passHref>
          <Text color="blue" display="inline" fontWeight="bold" cursor="pointer"> Signup</Text>
        </Link>
      </Text>
    </div>
  );
}
