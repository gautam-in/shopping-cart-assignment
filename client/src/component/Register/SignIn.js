import {
	SignInContainer,
	GridConatiner,
	GridItem,
	ItemContainer,
	FormTextField,
	RegiterTitle,
	RegiterContent,
	SignUpButton,
	ErrorMessage,
} from './StyledSignin';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../reducers/UserReducer';
import { useState, useEffect } from 'react';

const SignIn = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [fields, setFields] = useState({
		firstName: '',
		firstNameError: null,
		lastName: '',
		lastNameError: null,
		email: '',
		emailError: null,
		password: '',
		passwordError: null,
		confirmPassword: '',
	});

	const emailRegex =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
	const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.[A-Z]).{6,}/;

	useEffect(() => {
		if (auth.status !== null && auth.error !== null)
			dispatch(authActions.resetError());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (fields.firstName === '')
			setFields((state) => ({
				...state,
				firstNameError: 'firstName is required',
			}));

		if (fields.lastName === '')
			setFields((state) => ({
				...state,
				lastNameError: 'lastName is required',
			}));

		if (fields.email === '') {
			setFields((state) => ({ ...state, emailError: 'Email is required' }));
		} else if (!fields.email.match(emailRegex)) {
			setFields((state) => ({
				...state,
				emailError: 'Email should be syntax of xxx@x.xxx',
			}));
		}

		if (fields.password === '') {
			setFields((state) => ({
				...state,
				passwordError: 'Password is required',
			}));
		} else if (!fields.password.match(passwordRegex)) {
			setFields((state) => ({
				...state,
				passwordError:
					'Password should contain min 6 characters - numbers,alphabets and cannot have spaces.',
			}));
		} else if (fields.password !== fields.confirmPassword) {
			setFields((state) => ({
				...state,
				passwordError: 'Password and ConfirmPassword should match.',
			}));
		}

		if (
			fields.firstName.length !== 0 &&
			fields.lastName.length !== 0 &&
			fields.email.match(emailRegex) &&
			fields.password.match(passwordRegex) &&
			fields.password === fields.confirmPassword
		) {
			const credentials = {
				firstName: fields.firstName,
				lastName: fields.lastName,
				email: fields.email,
				password: fields.password,
			};
			setFields((state) => ({
				...state,
				firstNameError: null,
				lastNameError: null,
				emailError: null,
				passwordError: null,
			}));
			dispatch(authActions.registerUser(credentials));
			console.log(credentials);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFields((state) => ({ ...state, [name]: value }));
	};
	return (
		<>
			<SignInContainer component="form" onSubmit={handleSubmit}>
				<GridConatiner container spacing={1.5}>
					<GridItem item xs={12} sm={5} md={6}>
						<ItemContainer>
							<RegiterTitle>SignUp</RegiterTitle>
							<RegiterContent>
								We do not share your personal details with anyone.
							</RegiterContent>
							{auth?.status === 'failure' && (
								<ErrorMessage>{auth.error}</ErrorMessage>
							)}
						</ItemContainer>
					</GridItem>
					<GridItem item xs={12} sm={5} md={5} sx={{ mt: '10px' }}>
						<FormTextField
							required={true}
							label="First Name"
							variant="standard"
							type="text"
							name="firstName"
							onChange={handleChange}
							value={fields.firstName}
							fullWidth
						/>
						<ErrorMessage>{fields.firstNameError}</ErrorMessage>
						<FormTextField
							required={true}
							id="lastName"
							label="Last Name"
							variant="standard"
							type="text"
							name="lastName"
							onChange={handleChange}
							value={fields.lastName}
							fullWidth
						/>
						<ErrorMessage>{fields.lastNameError}</ErrorMessage>
						<FormTextField
							required={true}
							label="Email"
							variant="standard"
							type="text"
							name="email"
							onChange={handleChange}
							value={fields.email}
							fullWidth
						/>
						<ErrorMessage>{fields.emailError}</ErrorMessage>
						<FormTextField
							required={true}
							label="Password"
							variant="standard"
							type="password"
							name="password"
							onChange={handleChange}
							value={fields.password}
							fullWidth
						/>
						<ErrorMessage>{fields.passwordError}</ErrorMessage>
						<FormTextField
							required={true}
							label="Confirm Password"
							variant="standard"
							type="password"
							name="confirmPassword"
							onChange={handleChange}
							value={fields.confirmPassword}
							fullWidth
						/>

						<SignUpButton variant="contained" fullWidth type="submit">
							Signup
						</SignUpButton>
					</GridItem>
				</GridConatiner>
			</SignInContainer>
		</>
	);
};

export default SignIn;
