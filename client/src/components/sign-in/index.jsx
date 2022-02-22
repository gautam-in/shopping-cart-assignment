import { useState } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";

import { SignInContainer } from "./styles";

const SignIn = () => {
	const [signInData, setSignInData] = useState({
		email: "",
		password: "",
	});
	const [formInvalid, setFormInvalid] = useState(true);
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});
	const { email, password } = signInData;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(signInData);
	};

	const handleErrors = (name, value) => {
		let errorData = errors;

		switch (name) {
			case "email":
				if (!value) {
					errorData.email = "Email is required.";
				} else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
					errorData.email = "Email is not valid.";
				} else {
					errorData.email = "";
				}
				break;
			case "password":
				if (!value) {
					errorData.password = "Password is required.";
				} else if (value.length < 6) {
					errorData.password = "Password must have minimum 6 characters.";
				} else if (value.split(" ").length > 1) {
					errorData.password = "Password should not contains space.";
				} else if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
					errorData.password =
						"Password should contains alteast one character and a number.";
				} else {
					errorData.password = "";
				}
				break;
			default:
				break;
		}

		const isFormInvalid = !!errors.email || !!errors.password ? true : false;
		setFormInvalid(isFormInvalid);
		setErrors(errorData);
	};

	const handleInputChange = (e) => {
		const { value, name } = e.target;
		setSignInData({
			...signInData,
			[name]: value,
		});
		handleErrors(name, value);
	};

	return (
		<SignInContainer>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					name="email"
					value={email}
					id="email"
					onChange={handleInputChange}
					error={errors.email}
				/>
				<FormInput
					label="Password"
					name="password"
					value={password}
					type="password"
					id="password"
					onChange={handleInputChange}
					error={errors.password}
				/>
				<CustomButton type="submit" isAuth disabled={formInvalid}>
					Sign In
				</CustomButton>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
