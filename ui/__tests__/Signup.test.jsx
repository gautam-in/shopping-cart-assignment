/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Signup';
import Firebase from '../firebase';

const authObjectMock = {
	createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
		Promise.resolve(true)
	),
	createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
	sendPasswordResetEmail: jest.fn(() => Promise.resolve(true)),
	signInAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
		Promise.resolve(true)
	),
	fetchSignInMethodsForEmail: jest.fn(() => Promise.resolve(true)),
	signOut: jest.fn(() => {
		Promise.resolve(true);
	}),
	onAuthStateChanged: jest.fn(),
	currentUser: {
		sendEmailVerification: jest.fn(() => Promise.resolve(true)),
	},
};

const authMock = jest.fn(() => authObjectMock);

Firebase.auth = authMock;

jest.mock(
	'next/link',
	() =>
		({ children }) =>
			children
);

describe('Login Component Tests', () => {
	//

	beforeEach(() => {
		render(
			<ChakraProvider>
				<Login />
			</ChakraProvider>
		);
	});

	test('Component should render correctly', () => {
		const formElement = screen.getByTestId('signup-form');
		expect(formElement).toBeInTheDocument();
	});

	test('On Cliking submit should execute handleSubmit function', () => {
		const mockHandleSubmitFunction = jest.fn();
		const formSubmitButton = screen.getByText('Submit');
		formSubmitButton.onclick = mockHandleSubmitFunction;
		userEvent.click(formSubmitButton);
		expect(mockHandleSubmitFunction).toHaveBeenCalledTimes(1);
	});

	test('Redirect to Login Page', () => {
		const signupLinkElement = screen.getByText('Login');
		userEvent.click(signupLinkElement);
	});
});
