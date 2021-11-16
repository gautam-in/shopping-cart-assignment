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
import styles from '../styles/Signup.module.css';
import { signup } from '../Authcontext';

export default function Signup() {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const router = useRouter();

	function validatePasswords(password, confirmPassword) {
		if (password === confirmPassword) return true;

		return false;
	}

	async function handleSubmit(e) {
		setLoading(true);
		try {
			e.preventDefault();
			if (
				validatePasswords(
					passwordRef.current.value,
					confirmPasswordRef.current.value
				)
			) {
				const fullName = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
				const user = await signup(
					emailRef.current.value,
					passwordRef.current.value
				);
				await user.user.updateProfile({ displayName: fullName });
				router.push('/products');
			} else {
				setError('Password not matching');
			}
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	}

	return (
		<div className={styles.SignupContainer} data-testid="signup-form">
			<form onSubmit={handleSubmit}>
				{/* FirstName */}
				<FormControl>
					<FormLabel>First Name</FormLabel>
					<Input type="text" id="firstName_id" ref={firstNameRef} />
				</FormControl>

				{/* LastName */}
				<FormControl>
					<FormLabel>Last Name</FormLabel>
					<Input type="text" id="lastName_id" ref={lastNameRef} />
				</FormControl>

				{/* Email */}
				<FormControl>
					<FormLabel>Email address</FormLabel>
					<Input type="email" id="email_id" ref={emailRef} />
					<FormHelperText color="grey">
						We will never share your email.
					</FormHelperText>
				</FormControl>
				{/* Password */}
				<FormControl>
					<FormLabel marginTop="20px">Password</FormLabel>
					<Input
						type="password"
						id="password_id"
						ref={passwordRef}
						isRequired
					/>
				</FormControl>

				{/* Confirm Password */}
				<FormControl>
					<FormLabel marginTop="20px">Confirm Password</FormLabel>
					<Input
						type="password"
						id="password_id_confirm"
						ref={confirmPasswordRef}
						isRequired
					/>
				</FormControl>
				<FormControl isInvalid={error}>
					<Button mt={4} colorScheme="teal" isLoading={loading} type="submit">
						Submit
					</Button>
					<FormErrorMessage
						aria-errormessage={error}
						fontSize="large"
						fontWeight="bold"
						color="red"
					>
						{error}
					</FormErrorMessage>
				</FormControl>
			</form>
			<Text fontSize="xl" align="center">
				Already have an account?
				<Link href="/login" passHref>
					<Text
						color="blue"
						display="inline"
						fontWeight="bold"
						cursor="pointer"
					>
						{' '}
						Login
					</Text>
				</Link>
			</Text>
		</div>
	);
}
