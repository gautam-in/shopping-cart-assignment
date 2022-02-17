import AuthContainer from "../../components/auth-container";
import SignIn from "../../components/sign-in";

const SignInPage = () => {
	return (
		<AuthContainer
			title="Login"
			subTitle="Get access to your Orders, Wishlist and Recommendations."
		>
			<SignIn />
		</AuthContainer>
	);
};

export default SignInPage;
