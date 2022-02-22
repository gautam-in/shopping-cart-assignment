import AuthContainer from "../../components/auth-container";
import SignUp from "../../components/sign-up";

const RegisterPage = () => {
	return (
		<AuthContainer
			title="Sign Up"
			subTitle="We do not share your personal details with anyone."
		>
			<SignUp />
		</AuthContainer>
	);
};

export default RegisterPage;
