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
} from '../Register/StyledSignin';
import { authActions } from '../../reducers/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Login = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.status !== null && auth.error !== null)
			dispatch(authActions.resetError());
	}, [dispatch]);

	const [fields, setFields] = useState({
		email: '',
		emailError: null,
		password: '',
		passwordError: null,
	});
	const emailRegex =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
	const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.[A-Z]).{6,}/;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFields((state) => ({ ...state, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

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
		}

		if (
			fields.email.match(emailRegex) &&
			fields.password.match(passwordRegex)
		) {
			const credentials = { email: fields.email, password: fields.password };
			setFields((state) => ({
				...state,
				emailError: null,
				passwordError: null,
			}));
			dispatch(authActions.loginUser(credentials));
			console.log(credentials, auth);
		}
	};

	return (
		<>
			<SignInContainer component="form" onSubmit={handleSubmit}>
				<GridConatiner container spacing={1}>
					<GridItem item xs={12} sm={5} md={6}>
						<ItemContainer>
							<RegiterTitle>Login</RegiterTitle>
							<RegiterContent>
								Get Access to your Orders, Wishlist and Recommendations
							</RegiterContent>
							{auth?.status === 'failure' && (
								<ErrorMessage>{auth.error}</ErrorMessage>
							)}
						</ItemContainer>
					</GridItem>
					<GridItem item xs={12} sm={5} md={5} sx={{ mt: '10px' }}>
						<FormTextField
							name="email"
							label="Email"
							type="text"
							variant="standard"
							required
							onChange={handleChange}
							value={fields.email}
							fullWidth
						/>
						<ErrorMessage>{fields.emailError}</ErrorMessage>
						<FormTextField
							name="password"
							label="Password"
							variant="standard"
							type="password"
							required={true}
							onChange={handleChange}
							value={fields.password}
							fullWidth
						/>
						<ErrorMessage>{fields.passwordError}</ErrorMessage>

						<SignUpButton variant="contained" fullWidth type="submit">
							Login
						</SignUpButton>
					</GridItem>
				</GridConatiner>
			</SignInContainer>
		</>
	);
};

export default Login;
